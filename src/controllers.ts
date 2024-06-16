import { Request, Response } from 'express';
import { validationResult } from "express-validator";
import { RequestValidationError } from './utils/Errors/requestValidationError';
import { DatabaseConnectionError } from './utils/Errors/databaseConnectionError';

export const getCurrentUser = (req: Request, res: Response): void => {
	res.status(200).json({
		status: 'success',
		data: "Hello I'm the current user!"
	});
};
export const signup = (req: Request, res: Response): void => {	
	const errors = validationResult(req);
	
	if (!errors.isEmpty()) {
		throw new RequestValidationError(errors.array());
	}
	
	throw new DatabaseConnectionError();

	res.status(201).json({
		status: 'success',
		data: {
			user: null
		}
	});
};

export const signin = (req: Request, res: Response): void => {
	res.status(200).json({
		status: 'success',
	});
};

export const signout = (req: Request, res: Response): void => {
	res.status(200).json({
		status: 'success',
	});
};