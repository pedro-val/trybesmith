import express from 'express';
import ProductsRouter from './routes/products.router';
import OrderRouter from './routes/order.router';
import LoginRouter from './routes/login.router';

const app = express();

app.use(express.json());
app.use('/orders', OrderRouter);
app.use('/products', ProductsRouter);
app.use('/login', LoginRouter);

export default app;
