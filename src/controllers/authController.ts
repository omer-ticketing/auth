import { Request, Response } from "express";
import jwt from "jsonwebtoken";

import User from "../models/userModel";
import { BadRequestError } from "../utils/errors/badRequestError";

export const signup = async (req: Request, res: Response): Promise<void> => {
    const { email, password } = req.body;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
        throw new BadRequestError("Email is already in use!");
    }

    const user = await User.build({ email, password });
	
    const userJWT = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET!);
	req.session = { jwt: userJWT };
	
    res.status(201).json({	
        status: "success",
        data: {
            user,
        },
    });
};

export const signin = async (req: Request, res: Response): Promise<void> => {
	const { email, password } = req.body;
	const existingUser = await User.findOne({ email });
	
	if (!existingUser) {
		throw new BadRequestError('Invalid credentials.');
	}
	
	const passwordCorrect = await existingUser.isPasswordCorrect(password);
	if (!passwordCorrect) {
		throw new BadRequestError('Invalid credentials.')
	}

	const userJWT = jwt.sign({ id: existingUser.id, email: existingUser.email }, process.env.JWT_SECRET!);
	req.session = { jwt: userJWT };

    res.status(200).json({
        status: "success",
		data: {
			user: existingUser
		}
    });
};

export const signout = (req: Request, res: Response): void => {
	req.session = null;

    res.status(200).json({
        status: "success",
    });
};
