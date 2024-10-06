// src/lib/mongodb.ts
import mongoose from 'mongoose';

const MONGODB_URI: string | undefined = process.env.MONGODB_URI; // Add this to .env.local

if (!MONGODB_URI) {
    throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
};

interface MongooseCache {
    conn: mongoose.Connection | null;
    promise: Promise<typeof mongoose> | null;
};

let cached: MongooseCache = global.mongoose || { conn: null, promise: null };

if (!cached) {
    cached = global.mongoose = { conn: null, promise: null };
};

async function connectToDatabase(): Promise<typeof mongoose> {
    if (cached.conn) {
        return cached.conn;
    }

    if (!cached.promise) {
        const opts = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        };
        cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
            return mongoose;
        });
    }

    cached.conn = await cached.promise;
    return cached.conn;
}

export default connectToDatabase;
