import dotenv from 'dotenv';
dotenv.config({path: './config.env'});
import mongoose from 'mongoose';

import app from './app';

const port = process.env.PORT || 3000;

// TODO check if this is the right place for the err
if (!process.env.JWT_SECRET) {
	throw new Error("JWT secret must be defined.")
}

if (!process.env.MONGO_URI) {
	throw new Error('MONGO_URI must be defined.')
}

const connectToDB = async () => {
	await mongoose.connect(process.env.MONGO_URI!);
	console.log("Connected to mongoDB...");
};


connectToDB();


app.listen(port, () => {
	console.log(`Server is running on port ${port}...`);
})