import { NextResponse } from "next/server";
import { cookies } from 'next/headers'
import connectToDatabase from '@/lib/mongodb';
import User from '@/models/User';
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET;

export async function GET(request: Request) {
    const cookieStore = cookies()
    const token = cookieStore.get('token')?.value

    if (!token) {
        return NextResponse.json({ isLoggedIn: false }, { status: 200 });
    };

    try {
        const decoded = jwt.verify(token, JWT_SECRET as string) as { userId: string };
        await connectToDatabase();
        const user = await User.findById(decoded.userId);

        if (!user) {
            return NextResponse.json({ isLoggedIn: false }, { status: 200 });
        };

        return NextResponse.json({
            isLoggedIn: true,
            user: {
                id: user._id.toString(),
                username: user.username,
                email: user.email,
            }
        });
    } catch (error) {
        console.error('Auth check error:', error);
        return NextResponse.json({ isLoggedIn: false }, { status: 200 });
    };
};
