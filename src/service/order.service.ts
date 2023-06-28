import OrderModel from '../database/models/order.model';
import ProductModel from '../database/models/product.model';
import { Returns } from '../types/Returns';

const findAll = async () : Promise<Returns> => {
  const orders = await OrderModel.findAll({
    attributes: ['id', 'userId'],
    include: [{
      model: ProductModel,
      as: 'productIds',
      attributes: ['id'], 
    }],
  });
  return {
    status: 200,
    message: orders.map((order) => ({
      id: order.dataValues.id,
      userId: order.dataValues.userId,
      productIds: order.dataValues.productIds?.map((product) => product.id),
    })),
  };
};

export default {
  findAll,
};