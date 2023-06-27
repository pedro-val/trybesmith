import { expect } from 'chai';
import sinon from 'sinon';
import ProductModel from '../../../src/database/models/product.model';
import OrderModel from '../../../src/database/models/order.model';
import ProductService from '../../../src/service/product.service';

describe('ProductsService', function () {
  beforeEach(function () { sinon.restore(); });

  it('verificando retorno correto da função addProduct', async function () {
    const body = {
      name: "Martelo de Thor",
      price: "30 peças de ouro",
      orderId: 3
    };
    const expectedProduct = { dataValues: {
      id: 6,
      name: "Martelo de Thor",
      price: "30 peças de ouro"
      }
    }
    sinon.stub(OrderModel, 'findOne').returns(1 as any);
    sinon.stub(ProductModel, 'create').returns(expectedProduct as any);
    sinon.stub(ProductModel, 'findOne').returns(expectedProduct.dataValues as any);

    const result = await ProductService.addProduct(body.name,
      body.price, body.orderId);
    console.log('result', result)
    expect(result).to.deep.equal({
      status: 201,
      message: expectedProduct.dataValues,
    });
  });
});
