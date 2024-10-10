import { NextResponse } from "next/server";
import connectToDatabase from '@/lib/mongodb';
import User from '@/models/User';
import bcrypt from 'bcryptjs';

export async function POST(request: Request) {
    try {
        await connectToDatabase();

        const { email, password } = await request.json();

        // ? Find user by email
        const user = await User.findOne({ email });

        // ! If user doesn't exist, return error
        if (!user) {
            return NextResponse.json({ message: 'Invalid email or password' }, { status: 400 });
        };

        // ? Compare provided password with stored hashed password
        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return NextResponse.json({ message: 'Invalid email or password' }, { status: 400 });
        };

        // ? If password is valid, you would typically generate a JWT here. For now, return a success message
        return NextResponse.json({ message: 'Login successful' }, { status: 200 });

    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
    }
};