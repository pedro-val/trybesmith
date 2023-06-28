import express from 'express';
import loginController from '../controller/login.controller';
import verifyUsername from '../middlewares/usernameVerify';
import verifyPassword from '../middlewares/passwordVerify';

const router = express.Router();

router.post('/', verifyPassword, verifyUsername, loginController.verifyUser);

export default router;
