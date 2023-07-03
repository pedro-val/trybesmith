import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { Request, Response } from 'express';
import OrderService from '../../../src/service/order.service';
import OrdersController from '../../../src/controller/order.controller';

chai.use(sinonChai);

describe('OrdersController', function () {
  const req = {} as Request;
  const res = {} as Response;

  beforeEach(function () {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
    sinon.restore();
  });
  it('testando a função findAll', async function () {
    const mockreturn = {
      status: 200,
      message: [
        {
          "id": 1,
          "userId": 1,
          "productIds": [
            2,
            1
          ]
        },
        {
          "id": 2,
          "userId": 3,
          "productIds": [
            4,
            3
          ]
        },
        {
          "id": 3,
          "userId": 2,
          "productIds": [
            5
          ]
        }
      ]};
    sinon.stub(OrderService, 'findAll').returns(mockreturn as any);
    await OrdersController.findAll(req, res);
    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(mockreturn.message);
  });

});
