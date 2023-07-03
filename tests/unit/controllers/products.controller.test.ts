import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { Request, Response } from 'express';
import ProductService from '../../../src/service/product.service';
import ProductController from '../../../src/controller/products.controller';

chai.use(sinonChai);

describe('ProductsController', function () {
  const req = {} as Request;
  const res = {} as Response;
  
  beforeEach(function () {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
    sinon.restore();
  });
  afterEach(function () {
    sinon.restore();
  });
  it('verificando retorno correto da função addProduct', async function () {
    const body = {
      name: "Martelo de Thor",
      price: "30 peças de ouro",
      orderId: 3
    };
    const expectedProduct = { status: 201,
      message: {
      id: 6,
      name: "Martelo de Thor",
      price: "30 peças de ouro"
      }
    }
    req.body = body;
    sinon.stub(ProductService, 'addProduct').returns(expectedProduct as any);
    await ProductController.addProduct(req, res);
    expect(res.status).to.have.been.calledWith(expectedProduct.status);
    expect(res.json).to.have.been.calledWith(expectedProduct.message);
    });
    it('verificando retorno correto da função findAll', async function () {
      const expectedProducts = {
        status: 200,
        message: [
          {
            id: 1,
            name: "Martelo de Thor",
            price: "30 peças de ouro"
            },
            {
            id: 2,
            name: "Escudo do Capitão América",
            price: "20 peças de ouro"
            }
        ]};
      sinon.stub(ProductService, 'findAll').returns(expectedProducts as any);
      await ProductController.findAll(req, res);
      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith(expectedProducts.message);
    });
});
