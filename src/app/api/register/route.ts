import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongodb';
import User from '@/models/User';

export async function POST(request: Request) {
  try {
    // ? Connects to database
    await connectToDatabase();

    // ? Extracts data from the request
    const { firstName, lastName, gender, age, country, email, userName, password } = await request.json();

    // ! Server-side input validation:
    if (typeof firstName !== 'string' || firstName.length > 50) {
      return NextResponse.json({ message: 'Invalid first name' }, { status: 400 });
    };

    if (!['male', 'female', 'other'].includes(gender)) {
      return NextResponse.json({ message: 'Invalid gender' }, { status: 400 });
    }

    // ? Check for existing user:
    const existingUser = await User.findOne({ $or: [{ email }, { userName }] });
    if (existingUser) {
      return NextResponse.json({ message: 'Email or username already exists' }, { status: 400 });
    }

    // ? Creating a new user:
    const newUser = new User({
      firstName,
      lastName,
      gender,
      age,
      country,
      email,
      userName,
      password,
    });

    await newUser.save();

    // ? Sends a response back to client:
    return NextResponse.json({ message: 'User created successfully' }, { status: 201 });
  } catch (error) {
    console.error('Registration error:', error);
    return NextResponse.json({ message: 'Error creating user' }, { status: 500 });
  }
}