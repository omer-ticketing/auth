import { Request, Response } from "express";
import { validationResult } from "express-validator";
import jwt from "jsonwebtoken";

import User from "./models/userModel";
import { RequestValidationError } from "./utils/errors/requestValidationError";
import { BadRequestError } from "./utils/errors/badRequestError";

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

    if (existingUser) {
        throw new BadRequestError("Email is already in use!");
        return;
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
