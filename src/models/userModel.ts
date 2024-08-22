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
},{
	toJSON: {
		transform(doc, ret) {
			ret.id = ret._id;
			delete ret._id;
			delete ret.password;
			delete ret.__v;
		}
	}
});

userSchema.statics.build = (attrs: UserAttrs) => User.create(attrs);

const User = mongoose.model<UserDoc, UserModel>('User', userSchema);

userSchema.methods.isPasswordCorrect = async function(password: string): Promise<boolean> {
    return await bcrypt.compare(password, this.password);
};

userSchema.pre('save', async function(next) {
	if (this.isModified('password')) {
		this.password = await bcrypt.hash(this.password, 10);
	}
	next();
})


export default User;