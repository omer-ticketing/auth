import express from 'express';
import * as controllers from './controllers';
import { validateSignin, validateSignup } from './utils/validators/userValidator';
import { validateRequest } from './middlewares/validateRequest';

const router = express.Router();

router.post('/signup', validateSignup, validateRequest, controllers.signup);
router.post('/signin', validateSignin, validateRequest, controllers.signin);
router.post('/signout', controllers.signout);
router.get('/current-user', controllers.getCurrentUser);

export default router;