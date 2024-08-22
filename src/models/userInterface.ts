import mongoose from "mongoose";

export interface UserAttrs {
    email: string;
    password: string;
}

export interface UserDoc extends mongoose.Document {
	email: string;
	password: string;
	isPasswordCorrect(password: string): Promise<boolean>;
}

export interface UserModel extends mongoose.Model<UserDoc> {
    build(attrs: UserAttrs): Promise<UserDoc>;
}

