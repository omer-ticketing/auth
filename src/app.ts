import express from 'express';
import 'express-async-errors';
import cookieSession from 'cookie-session';
import { NotFoundError } from './utils/errors/notFoundError';
import { errorHandler } from './middlewares/error';
import authRouter from './routes/authRoutes';
import userRouter from './routes/userRoutes';

const app = express();
app.set('trust proxy', true);
app.use(express.json());
app.use(cookieSession({
	signed: false,
	secure: true
}));

app.use('/api/users', authRouter);
app.use('/api/users', userRouter);

app.all('*', async () => {
	throw new NotFoundError();
});
app.use(errorHandler);

export default app;