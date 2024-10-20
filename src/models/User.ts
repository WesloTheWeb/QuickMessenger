import mongoose, { Schema, Document, Model } from 'mongoose';
import bcrypt from 'bcryptjs';

interface IUser extends Document {
    _id: mongoose.Types.ObjectId; 
    firstName: string;
    lastName?: string;
    gender: string;
    age: number;
    country: string;
    email: string;
    username: string;
    password: string;
};

const userSchema: Schema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String },
    gender: { type: String, required: true },
    age: { type: Number, required: true },
    country: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
}, { timestamps: true });


userSchema.pre<IUser>('save', async function (next) {
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 12);
    };

    next();
});

const User: Model<IUser> = mongoose.models.User || mongoose.model<IUser>('User', userSchema);


export default User;


/* Notes:
The IUser interface defines the shape of the user data.
The User model is typed as Model<IUser>.
*/