import { Request, Response } from 'express';
import ProductService from '../service/product.service';

const addProduct = async (req: Request, res: Response): Promise<Response> => {
  const { name, price, orderId } = req.body;
  const result = await ProductService.addProduct(name, price, orderId);
  return res.status(result.status).json(result.message);
};

const findAll = async (req: Request, res: Response): Promise<Response> => {
  const result = await ProductService.findAll();
  return res.status(result.status).json(result.message);
};

export default {
  addProduct,
  findAll,
};