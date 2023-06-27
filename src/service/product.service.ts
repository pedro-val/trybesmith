import ProductModel from '../database/models/product.model';
// import OrderModel from '../database/models/order.model';
import { Returns } from '../types/Returns';

const addProduct = async (name: string, price: string, orderId: number) : Promise<Returns> => {
  // const order = await OrderModel.findOne({ where: { id: orderId } });
  // if (order) {
  const product = await ProductModel.create({ name, price, orderId });
  const retorno = await ProductModel.findOne({ where: { id: product.dataValues.id },
    attributes: ['id', 'name', 'price'],
  });
  if (retorno !== null) {
    return {
      status: 201,
      message: retorno,
    };
    // }
  } 
  return {
    status: 404,
    message: { message: 'Order Not Found' },
  };
};

export default {
  addProduct,
};