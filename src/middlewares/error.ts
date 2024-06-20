import { Request, Response, NextFunction } from "express";
import { CustomError } from "../utils/errors/customError";

export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction): void => {
    if (err instanceof CustomError) {
        res.status(err.statusCode).json({
            status: "fail",
            errors: err.serializeErrors(),
        });
		return;
    }

    res.status(400).json({
        status: "failed",
        errors: err.message || "Something wend wrong",
    });
};
