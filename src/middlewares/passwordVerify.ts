import { NextFunction, Request, Response } from 'express';

const passwordUsername = async (req: Request, res: Response, next: NextFunction) => {
  const { password } = req.body;
  if (!password) return res.status(400).json({ message: '"username" and "password" are required' });
  next();
};

export default passwordUsername;