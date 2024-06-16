import { ValidationError } from 'express-validator';
import { CustomError } from './customError';

export class RequestValidationError extends CustomError {
	statusCode = 400;
	constructor(public errors: ValidationError[]) {
		super();
	}

	serializeErrors() {
		return this.errors.map(error => ({
			message: error.msg,
			field: error.type === 'field' ? error.path : "field"
		}))
	}
}