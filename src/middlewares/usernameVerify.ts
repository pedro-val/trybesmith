import { NextFunction, Request, Response } from 'express';

const verifyUsername = async (req: Request, res: Response, next: NextFunction) => {
  const { username } = req.body;
  if (!username) return res.status(400).json({ message: '"username" and "password" are required' });
  next();
};

export default verifyUsername;