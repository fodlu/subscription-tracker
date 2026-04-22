import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Username is required"],
        trim: true,
        minLength: 2,
        maxLength: 50
    },
    email: {
        type: String,
        required: [true, "User email is required"],
        trim: true,
        unique: true,
        lowerCase: true,
        match: [/\S+@\S+\.\S+/, "Please fill a valid email"],
    },
    password: {
        type: String,
        required: [true, "User Password is required"],
        minLength: 6
    }
}, {timestamps: true});

const User = mongoose.model('User', userSchema);

export default User;