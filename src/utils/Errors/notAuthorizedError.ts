import { CustomError } from "./customError";

export class NotAuthorizedError extends CustomError {
	statusCode = 401;
	constructor(message: string = "Not authorized.") {
		super(message)
	}

	serializeErrors() { 
		return [{ message: this.message }]
	}
		
}
