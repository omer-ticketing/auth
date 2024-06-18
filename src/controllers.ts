import { Request, Response } from "express";
import { validationResult } from "express-validator";
import User from "./models/userModel";
import { BadRequestError } from "./utils/Errors/BadRequestError";
import { RequestValidationError } from "./utils/Errors/requestValidationError";

export const getCurrentUser = (req: Request, res: Response): void => {
    res.status(200).json({
        status: "success",
        data: "Hello I'm the current user!",
    });
};
export const signup = async (req: Request, res: Response): Promise<void> => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        throw new RequestValidationError(errors.array());
    }
    const { email, password } = req.body;
	
    const existingUser = await User.findOne({ email });
	console.log({existingUser, email, password});
	
	if (existingUser) {
		throw new BadRequestError('Email is already in use!');
		return;
	}

    const user = await User.build({ email, password });
	console.log({user});
	
    res.status(201).json({
        status: "success",
        data: {
            user
        },
    });
};

export const signin = (req: Request, res: Response): void => {
    res.status(200).json({
        status: "success",
    });
};

export const signout = (req: Request, res: Response): void => {
    res.status(200).json({
        status: "success",
    });
};
