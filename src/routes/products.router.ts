import express from 'express';
import ProductsController from '../controller/products.controller';
import addProductValidation from '../middlewares/addProductValidation';

const router = express.Router();

router.post('/', addProductValidation, ProductsController.addProduct);
router.get('/', ProductsController.findAll);

export default router;