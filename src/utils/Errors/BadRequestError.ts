import { CustomError } from "./customError";

export class BadRequestError extends CustomError {
	constructor(message: string) {
		super(message);
	}

    statusCode = 400;
    serializeErrors() {
        return [{ message: this.message }];
    }
}