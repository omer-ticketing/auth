import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { NotAuthorizedError } from '../utils/errors/notAuthorizedError';

interface UserPayload {
    id: string;
    email: string;
}

// TODO move to a global location
declare global {
    namespace Express {
        interface Request {
            user?: UserPayload;
        }
    }
}

export const protect = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
	if (!req.session?.jwt) {
		throw new NotAuthorizedError();
	}
	
	const payload = jwt.verify(req.session.jwt, process.env.JWT_SECRET!) as UserPayload;
	req.user = payload;
	
	next();
}