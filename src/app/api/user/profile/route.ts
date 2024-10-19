import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import connectToDatabase from '@/lib/mongodb';
import User from '@/models/User';

const JWT_SECRET = process.env.JWT_SECRET;

export async function GET(request: Request) {
  const cookieStore = cookies();
  const token = cookieStore.get('token')?.value;

  if (!token) {
    return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });
  };

  try {
    const decoded = jwt.verify(token, JWT_SECRET as string) as { userId: string };
    await connectToDatabase();
    const user = await User.findById(decoded.userId).select('-password');

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    // ? Return all user fields except password
    const userProfile = {
      id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      username: user.username,
      gender: user.gender,
      age: user.age,
      country: user.country,
      email: user.email,
    };

    return NextResponse.json({ user: userProfile });
  } catch (error) {
    return NextResponse.json({ error: 'Invalid token' }, { status: 401 });
  };
}
