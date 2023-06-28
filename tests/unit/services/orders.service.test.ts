import { expect } from 'chai';
import sinon from 'sinon';
import OrderModel from '../../../src/database/models/order.model';
import OrderService from '../../../src/service/order.service';

describe('OrdersService', function () {
  beforeEach(function () { sinon.restore(); });
  it('testando retorno correto da função findAll', async function () {
    const expectedOrders = [
      {dataValues: {
        "id": 1,
        "userId": 1,
        "productIds": [
          {
            "id": 2
          },
          {
            "id": 1
          }
        ]
      }},
      {dataValues: {
        "id": 2,
        "userId": 3,
        "productIds": [
          {
            "id": 4
          },
          {
            "id": 3
          }
        ]
      }},
      {dataValues: {
        "id": 3,
        "userId": 2,
        "productIds": [
          {
            "id": 5
          }
        ]
      }}
    ];
    const expectedResponse = [
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
    ];
    sinon.stub(OrderModel, 'findAll').returns(expectedOrders as any);
    const result = await OrderService.findAll();
    expect(result).to.deep.equal({
      status: 200,
      message: expectedResponse,
    });
  });


});
