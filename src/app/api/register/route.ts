import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongodb';
import User from '@/models/User';

export async function POST(request: Request) {
  try {
    await connectToDatabase();
    
    const { firstName, lastName, gender, age, country, email, userName, password } = await request.json();

    const existingUser = await User.findOne({ $or: [{ email }, { userName }] });
    if (existingUser) {
      return NextResponse.json({ message: 'Email or username already exists' }, { status: 400 });
    }

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

    return NextResponse.json({ message: 'User created successfully' }, { status: 201 });
  } catch (error) {
    console.error('Registration error:', error);
    return NextResponse.json({ message: 'Error creating user' }, { status: 500 });
  }
}