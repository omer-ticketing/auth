import { CustomError } from "./customError";

export class DatabaseConnectionError extends CustomError {
	constructor() {
		super("Error connecting to the database");
	}
    statusCode = 500;
    serializeErrors() {
        return [{ message: this.message }];
    }
}
