import bcrypt from 'bcryptjs';
import UserModel from '../database/models/user.model';
import jwt from '../utils/jwt';
import { Returns } from '../types/Returns';

const verifyUser = async (username: string, password: string) : Promise<Returns> => {
  const user = await UserModel.findOne({ where: { username } });
  if (!user) {
    return { 
      status: 401, message: { message: 'Username or password invalid' }, 
    };
  }
  const isPasswordMatch = await bcrypt.compare(password, user?.dataValues.password);
  if (!isPasswordMatch) {
    return { 
      status: 401, message: { message: 'Username or password invalid' }, 
    };
  }
  const payload = { id: user?.dataValues.id,
    username: user?.dataValues.username,
  };
  return { status: 200, message: { token: jwt.sign(payload) } };
};

export default {
  verifyUser,
};