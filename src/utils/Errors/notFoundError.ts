import { CustomError } from "./customError";

export class NotFoundError extends CustomError {
	statusCode = 404;
	serializeErrors() {
		return [{
			message: "Not found"
		}]
	}
}