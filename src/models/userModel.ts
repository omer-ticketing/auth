import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
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

userSchema.statics.build = async (attrs: UserAttrs) => await User.create(attrs);

userSchema.pre('save', async function(next) {
	if (this.isModified('password')) {
		this.password = await bcrypt.hash(this.password, 10);
	}
	next();
})
const User = mongoose.model<UserDoc, UserModel>('User', userSchema);

export default User;