import mongoose from 'mongoose';

const DB_URI = process.env.DB_URI

if(!DB_URI) {
    throw new Error('Please define the mongoDB URI environment variable')
}

const connectToDatabase = async ()=> {
    try {
        await mongoose.connect(DB_URI);
        console.log("Connected to the database!")
    } catch (error) {
        console.error('Error connecting to the database', error);
        process.exit(1)
    }
}

export default connectToDatabase;