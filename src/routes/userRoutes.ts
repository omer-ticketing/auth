import * as userController from '../controllers/userController';
import { authMiddlewares} from '@omer-ticketing/common';
import express from 'express';

const router = express.Router();

router.get('/current-user',authMiddlewares.protect, userController.getCurrentUser);

export default router;