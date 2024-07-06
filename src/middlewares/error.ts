import { Request, Response, NextFunction } from "express";
import { CustomError } from "@omer-ticketing/common";

export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction): Response | void => {
    if (err instanceof CustomError) {
        return res.status(err.statusCode).json({
            status: "fail",
            errors: err.serializeErrors(),
        });
    }

    res.status(500).json({
        status: "failed",
        errors: err.message || "Something wend wrong",
    });
};
