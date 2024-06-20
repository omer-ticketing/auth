import dotenv from 'dotenv';
dotenv.config({path: './config.env'});
import mongoose from 'mongoose';

import app from './app';

const port = process.env.PORT || 3000;

const connectToDB = async () => {
	await mongoose.connect('mongodb://auth-mongo-srv:27017/auth');
	console.log("Connected to mongoDB...");
};

connectToDB();

app.listen(port, () => {
	console.log(`Server is running on port ${port}...`);
})