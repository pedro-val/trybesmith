import express from 'express';
import ProductsController from '../controller/products.controller';

const router = express.Router();

router.post('/', ProductsController.addProduct);
router.get('/', ProductsController.findAll);

export default router;