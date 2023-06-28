import { expect } from 'chai';
import sinon from 'sinon';
import UserModel from '../../../src/database/models/user.model';
import LoginService from '../../../src/service/login.service';
import bcrypt from 'bcryptjs';

describe('LoginService', function () {
  beforeEach(function () { sinon.restore(); });
  const body = {
    "username": "Hagar",
    "password": "terrível"
  };
  it('verificando retorno correto da função verifyLogin', async function () {
    const user = { dataValues: {
      id: 1,
      username: 'Hagar',
      vocation: 'Guerreiro',
      level: 10,
      password: '$2a$10$pNSO5DOHjJhJwsn/oRgDZuwkNQAIZrihftSS3KQHeIy837UHwLvEO'
      }}
    sinon.stub(UserModel, 'findOne').returns(user as any);
    const verify = await LoginService.verifyUser(body.username, body.password);
    expect(verify.status).to.be.equal(200);
  });
  it('verificando retorno da função verifyLogin quando o usuário não existe', async function () {
    sinon.stub(UserModel, 'findOne').returns(null as any);
    const verify = await LoginService.verifyUser(body.username, body.password);
    expect(verify.status).to.be.equal(401);
  });
  it('verificando retorno da função verifyLogin quando a senha está incorreta', async function () {
    const user = { dataValues: {
      id: 1,
      username: 'Hagar',
      vocation: 'Guerreiro',
      level: 10,
      password: '$2a$10$pNSO5DOHjJhJwsn/oRgDZuwkNQAIZrihftSS3KQHeIy837UHwLvEO'
      }}
    sinon.stub(UserModel, 'findOne').returns(user as any);
    sinon.stub(bcrypt, 'compare').returns(false as any);
    const verify = await LoginService.verifyUser(body.username, body.password);
    expect(verify.status).to.be.equal(401);
  });

});
