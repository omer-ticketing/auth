import { CustomError } from "./customError";

export class DatabaseConnectionError extends CustomError {
    statusCode = 500;
    serializeErrors() {
        return [{ message: "Error connecting to the database" }];
    }
}
