import mongoose from 'mongoose';
import { UserAttrs, UserDoc, UserModel } from './userInterface';

const userSchema = new mongoose.Schema({
	email: {
		type: String,
		required: [true, "A user must have an email."]
	},
	password: {
		type: String,
		required: [true, "A user must have a password."]
	},
});

userSchema.statics.build = (attrs: UserAttrs) => new User(attrs);
const User = mongoose.model<UserDoc, UserModel>('User', userSchema);

export default User;