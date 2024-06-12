import { Request, Response } from 'express';

export const getCurrentUser = (req: Request, res: Response): void => {
	res.status(200).json({
		status: 'success',
		data: "Hello I'm the current user!"
	});
};
export const signup = (req: Request, res: Response): void => {
	res.status(200).json({
		status: 'success',
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