import { CustomError } from "./customError";

export class NotAuthorizedError extends CustomError {
	statusCode = 401;
	constructor() {
		super("Not authorized.")
	}

	serializeErrors() { 
		return [{ message: this.message }]
	}
		
}
