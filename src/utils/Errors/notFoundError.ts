import { CustomError } from "./customError";

export class NotFoundError extends CustomError {
	constructor() {
		super("Not found");
	}
	statusCode = 404;
	serializeErrors() {
		return [{
			message: this.message
		}]
	}
}