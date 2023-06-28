import express from 'express';
import OrderController from '../controller/order.controller';

const router = express.Router();

router.get('/', OrderController.findAll);

export default router;