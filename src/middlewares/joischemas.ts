import joi from 'joi';

// [Será validado que o campo "name" é obrigatório]

// Se o campo "name" não for informado, o resultado retornado deverá ser um status http 400 e
// { "message": "\"name\" is required" }
// [Será validado que o campo "name" tem o tipo string]

// Se o campo "name" não for do tipo string, o resultado retornado deverá ser um status http 422 e
// { "message": "\"name\" must be a string" }
// [Será validado que o campo "name" é uma string com mais de 2 caracteres]

// Se o campo "name" não for uma string com mais de 2 caracteres, o resultado retornado deverá ser um status http 422 e
// { "message": "\"name\" length must be at least 3 characters long" }
// 👉 Para price

// [Será validado que o campo "price" é obrigatório]

// Se o campo "price" não for informado, o resultado retornado deverá ser um status http 400 e
// { "message": "\"price\" is required" }
// [Será validado que o campo "price" tem o tipo string]

// Se o campo "price" não for do tipo string, o resultado retornado deverá ser um status http 422 e
// { "message": "\"price\" must be a string" }
// [Será validado que o campo "price" é uma string com mais de 2 caracteres]

// Se o campo "price" não for uma string com mais de 2 caracteres, o resultado retornado deverá ser um status http 422 e
// { "message": "\"price\" length must be at least 3 characters long" }

const addProductsSchema = joi.object({
  name: joi.string().min(3).required(),
  price: joi.string().min(3).required(),
//   orderId: joi.number(),
}).messages({
  'any.required': '{#label} is required',
  'string.min': '{#label} length must be at least 3 characters long',
});

export default addProductsSchema;