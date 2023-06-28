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
    // sinon.stub(OrderModel, 'findOne').returns(1 as any);
    sinon.stub(ProductModel, 'create').returns(expectedProduct as any);
    sinon.stub(ProductModel, 'findOne').returns(expectedProduct.dataValues as any);
    const result = await ProductService.addProduct(body.name,
      body.price, body.orderId);
    expect(result).to.deep.equal({
      status: 201,
      message: expectedProduct.dataValues,
    });
  });
  it('testando retorno incorreto da função addProduct', async function () {
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
    const response = {
      status: 404,
      message: { message: 'Order Not Found' },
    }
    sinon.stub(ProductModel, 'create').returns(expectedProduct as any);
    sinon.stub(OrderModel, 'findOne').returns(null as any);
    const result = await ProductService.addProduct(body.name,
      body.price, body.orderId);

  });
  it('verificando retorno correto da função findAll', async function () {
    const expectedProducts = [
      { dataValues: {
        id: 1,
        name: "Martelo de Thor",
        price: "30 peças de ouro"
        }
      },
      { dataValues: {
        id: 2,
        name: "Arco e Flecha de Legolas",
        price: "15 peças de ouro"
        }
      },
      { dataValues: {
        id: 3,
        name: "Espada de Aço Valiriano",
        price: "50 peças de ouro"
        }
      },
      { dataValues: {
        id: 4,
        name: "Escudo de Capitão América",
        price: "10 peças de ouro"
        }
      },
      { dataValues: {
        id: 5,
        name: "Mjolnir",
        price: "30 peças de ouro"
        }
      },
    ]
    sinon.stub(ProductModel, 'findAll').returns(expectedProducts as any);
    const result = await ProductService.findAll();
    expect(result).to.deep.equal({
      status: 200,
      message: expectedProducts,
    });
  });
});
