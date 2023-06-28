import { Request, Response } from 'express';
import OrderService from '../service/order.service';

const findAll = async (req: Request, res: Response): Promise<Response> => {
  const result = await OrderService.findAll();
  return res.status(result.status).json(result.message);
};

export default {
  findAll,
};