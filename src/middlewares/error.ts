import { Request, Response, NextFunction } from "express";
import { CustomError } from "../utils/Errors/customError";

export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof CustomError) {
        return res.status(err.statusCode).json({
            status: "fail",
            errors: err.serializeErrors(),
        });
    }

    res.status(400).json({
        status: "failed",
        errors: err.message || "Something wend wrong",
    });
};
