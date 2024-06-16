import express from 'express';
import 'express-async-errors';
import router from './router';
import { errorHandler } from './middlewares/error';
import { NotFoundError } from './utils/Errors/notFoundError';

const app = express();

app.use(express.json());

app.use('/api/users', router);
app.all('*', async () => {
	throw new NotFoundError();
});
app.use(errorHandler);

export default app;