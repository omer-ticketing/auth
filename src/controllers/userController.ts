import { Request, Response } from "express";

export const getCurrentUser = (req: Request, res: Response): void => {
    res.status(200).json({
        status: "success",
        data: { user: req.user },
    });
};
