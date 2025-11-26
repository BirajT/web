import { asyncHandler } from "../utils/asynchandler.utils.js";
import Cart from "../models/cart.model.js";
import Product from "../models/product.model.js";
import CustomError from "../middlewares/error_handler.middleware.js";

//* create cart
export const create = asyncHandler(async (req, res) => {
  const user = req.user._id;
  const { product_id, quantity } = req.body;
  let cart = null;

  const product = await Product.findById(product_id);

  if (!product) {
    throw new CustomError("Product not found", 404);
  }

  cart = await Cart.findOne({ user });

  if (cart) {
    const already_exists = cart.items.find(
      (item) => item.product.toString() === product._id.toString()
    );
    if (already_exists) {
      already_exists.quantity = Number(quantity);
    } else {
      cart.items.push({ product: product._id, quantity: Number(quantity) });
    }
  } else {
    cart = new Cart({
      user,
      items: [
        {
          product: product._id,
          quantity: Number(quantity),
        },
      ],
    });
  }

  await cart.save();

  res.status(201).json({
    message: "Product added to cart",
    data: cart,
    status: "success",
  });
});

//* getCart

export const getCart = asyncHandler(async (req, res) => {
  const user = req.user._id;

  const cart = await Cart.findOne({ user })
    .populate("user")
    .populate("items.product");

  if (!cart) {
    throw new CustomError("Cart is empty. Try adding some products", 400);
  }

  //* calculate total amount
  cart.total_amount = cart.items.reduce((acc, item) => {
    return acc + Number(item.product.price) * Number(item.quantity);
  }, 0);

  res.status(200).json({
    message: "Cart fetched",
    data: cart,
    status: "success",
  });
});

//* remove product from cart


//* clear cart
