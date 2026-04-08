import CustomError from "../middleware/error_handler.middleware.js";
import Order from "../models/order.model.js";
import Menu from "../models/menu.model.js";
import { asyncHandler } from "../utils/asynchandler.utils.js";


export const createOrder = asyncHandler(async (req, res, next) => {
  const { menu, quantity } = req.body;
  const user = req.user._id;

  const menuDoc = await Menu.findById(menu)
  if (!menuDoc) throw new CustomError('Menu item not found', 404)

  const totalPrice = menuDoc.price * quantity

  const order = await Order.create({ menu, quantity, user, totalPrice })
  await order.populate('menu')

  res.status(201).json({
    success: true,
    message: "Order created successfully",
    data: { order, totalPrice }
  });
});

export const getAll = asyncHandler(async (req, res, next) => {
  const isAdmin = req.user.role === 'ADMIN' || req.user.role === 'OWNER'
  const filter = isAdmin ? {} : { user: req.user._id }
  const orders = await Order.find(filter).populate("menu").populate("user", "first_name last_name email")
  res.status(200).json({ success: true, data: orders });
});

export const getById = asyncHandler(async (req, res, next) => {
  const { id } = req.params;

  const order = await Order.findById(id).populate("menu");

  if (!order) {
    throw new CustomError("Order not found", 404);
  }

  res.status(200).json({
    success: true,
    data: order
  });
});

export const updateOrder = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const { menu, quantity } = req.body;
  const order = await Order.findById(id);

  if (!order) {
    throw new CustomError("Order not found", 404);
  }

  if (menu) order.menu = menu;
  if (quantity) order.quantity = quantity;

  await order.save();

  res.status(200).json({
    success: true,
    message: "Order updated successfully",
    data: order
  });
});

export const remove = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const order = await Order.findByIdAndDelete(id);

  if (!order) {
    throw new CustomError("Order not found", 404);
  }

  res.status(200).json({
    success: true,
    message: "Order deleted successfully",
    data: null
  });
});