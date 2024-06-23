import * as userController from '../controllers/userController';
import express from 'express';

const router = express.Router();

router.get('/current-user', userController.getCurrentUser);

export default router;