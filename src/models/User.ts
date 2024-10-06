import mongoose, { Schema, Document, Model } from 'mongoose';

interface IUser extends Document {
    firstName: string;
    lastName?: string;
    gender: string;
    age: number;
    country: string;
    email: string;
    userName: string;
    password: string;
};

const userSchema: Schema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String },
    gender: { type: String, required: true },
    age: { type: Number, required: true },
    country: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    userName: { type: String, required: true, unique: true },
    password: { type: String, required: true },
}, { timestamps: true });

const User: Model<IUser> = mongoose.models.User || mongoose.model<IUser>('User', userSchema);

export default User;


/* Notes:
The IUser interface defines the shape of the user data.
The User model is typed as Model<IUser>.
*/