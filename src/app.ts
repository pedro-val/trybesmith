import express from 'express';
import ProductsRouter from './routes/products.router';
import OrderRouter from './routes/order.router';

const app = express();

app.use(express.json());
app.use('/orders', OrderRouter);
app.use('/products', ProductsRouter);

export default app;
