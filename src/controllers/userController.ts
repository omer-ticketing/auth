import { Request, Response } from "express";
import jwt from "jsonwebtoken";

export const getCurrentUser = (req: Request, res: Response): Response | void => {
	if (!req.session?.jwt) {
		return res.status(400).json({
			status: 'fail',
			data: null
		});
	}
	const payload = jwt.verify(req.session.jwt, process.env.JWT_SECRET!);

    res.status(200).json({
        status: "success",
        data: payload,
    });
};