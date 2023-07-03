import { Request, Response, NextFunction } from 'express';
import addProductsSchema from './joischemas';

const addProductValidation = (
  req: Request,
  res: Response,
  next: NextFunction,
): Response<Record<string, void>> | void => {
  const { error } = addProductsSchema.validate(req.body);
  if (error) {
    if (error.details[0].message.includes('is not allowed')) {
      return next();
    }
    if (error.details[0].message.includes('is required')) {
      return res.status(400).json({ message: error.details[0].message });
    }
    return res.status(422).json({ message: error.details[0].message });
  }
  next();
};
  
export default addProductValidation;