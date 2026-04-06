import Order from "../models/order.model.js";
import Menu from "../models/menu.model.js";

export const createOrder = async (req, res) => {
  try {
    const { menu,quantity } = req.body;

    let totalAmount = 0;
    totalAmount=


    

    const order = await Order.create({
      userId: req.user._id,
      items,
      totalAmount,
      status: "pending",
      orderTime: new Date()
    });

    res.status(201).json({
      success: true,
      data: order
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};