import express from 'express';
import * as controllers from './controllers';
import { validateSignup } from './utils/validators/userValidator';

const router = express.Router();

router.post('/signup', validateSignup, controllers.signup);
router.post('/signin', controllers.signin);
router.post('/signout', controllers.signout);
router.get('/current-user', controllers.getCurrentUser);

export default router;