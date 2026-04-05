import Order from "../models/order.model.js";
import Menu from "../models/menu.model.js";

export const createOrder = async (req, res) => {
  try {
    const { items } = req.body; // [{ itemId, quantity 

    let totalAmount = 0;

    // calculate total price
    for (const item of items) {
      const menuItem = await Menu.findById(item.itemId);

      if (!menuItem) {
        return res.status(404).json({ message: "Item not found" });
      }

      totalAmount += menuItem.price * item.quantity;
    }

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