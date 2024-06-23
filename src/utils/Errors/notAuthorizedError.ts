import { CustomError } from "./customError";

export class NotAuthorizedError extends CustomError {
    constructor(message: string = "Not authorized.") {
        super(message);
    }

    statusCode = 401;
    serializeErrors() {
        return [{ message: this.message }];
    }
}
