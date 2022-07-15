import express from 'express';
import User from '../models/userModel.js';
import { generateToken } from '../utils.js';
import expressAsyncHandler from 'express-async-handler';

const orderRouter = express.Router();
orderRouter.post(
  '/',
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const order = new Order({
      orderItems: req.body.orderItems.map((x) => ({ ...x, product: x._id })),
      shippingAddress: req.body.shippingAddress,
      paymentMethod: req.body.paymentMethod,
      itemsPrice: req.body.itemsPrice,
      shippingPrice: req.body.shippingPrice,
      taxPrice: req.body.taxPrice,
      totalPrice: req.body.totalPrice,
      user: req.body._id,
    });
  })
);
export default orderRouter;
