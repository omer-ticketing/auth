import { CustomError } from "./customError";

export class NotFoundError extends CustomError {
	constructor(message: string = "Not found.") {
		super(message);
	}
	
	statusCode = 404;
	serializeErrors() {
		return [{
			message: this.message
		}]
	}
}