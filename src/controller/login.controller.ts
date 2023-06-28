import { Request, Response } from 'express';
import loginService from '../service/login.service';

const verifyUser = async (req: Request, res: Response): Promise<Response> => {
  const { username, password } = req.body;
  const result = await loginService.verifyUser(username, password);
  return res.status(result.status).json(result.message);
};

export default {
  verifyUser,
};