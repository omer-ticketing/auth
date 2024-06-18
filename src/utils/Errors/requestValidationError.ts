import { ValidationError } from 'express-validator';
import { CustomError } from './customError';

export class RequestValidationError extends CustomError {
	constructor(public errors: ValidationError[]) {
		super('');
		}
		
	statusCode = 400;
	serializeErrors() {
		return this.errors.map(error => ({
			message: error.msg,
			field: error.type === 'field' ? error.path : "field"
		}))
	}
}