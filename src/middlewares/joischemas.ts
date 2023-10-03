import joi from 'joi';

const addProductsSchema = joi.object({
  name: joi.string().min(3).required(),
  price: joi.string().min(3).required(),
//   orderId: joi.number(),
}).messages({
  'any.required': '{#label} is required',
  'string.min': '{#label} length must be at least 3 characters long',
});

export default addProductsSchema;