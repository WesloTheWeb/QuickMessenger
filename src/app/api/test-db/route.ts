import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongodb';

export async function GET() {
  try {
    await connectToDatabase();
    return NextResponse.json({ message: 'Successfully connected to MongoDB' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'Failed to connect to MongoDB', error: error.message }, { status: 500 });
  }
};