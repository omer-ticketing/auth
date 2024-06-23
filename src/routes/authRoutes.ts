import express from 'express';
import * as authController from '../controllers/authController';
import { validateSignin, validateSignup } from '../utils/validators/userValidator';
import { validateRequest } from '../middlewares/validateRequest';

const router = express.Router();

router.post('/signup', validateSignup, validateRequest, authController.signup);
router.post('/signin', validateSignin, validateRequest, authController.signin);
router.post('/signout', authController.signout);

export default router;