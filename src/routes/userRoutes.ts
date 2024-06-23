import * as userController from '../controllers/userController';
import * as authMiddlewares from '../middlewares/authMiddlewares';
import express from 'express';

const router = express.Router();

router.get('/current-user',authMiddlewares.protect, userController.getCurrentUser);

export default router;