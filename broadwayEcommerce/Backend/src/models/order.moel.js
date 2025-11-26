import mongoose from "mongoose";
import { ORDER_STATUS } from "../constants/enums.constants.js";

// user , items -> [{product,quantity}] , total_amount

const orderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: [true, "user is required"],
    },

    items: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "product",
          required: [true, "product is required"],
        },
        quantity: {
          type: Number,
          default: 1,
          min: 1,
        },
      },
    ],
    total_amount: {
      type: Number,
      required: [true, "Total amount is required"],
      default: 0,
    },
    status: {
      type: String,
      enum: Object.values(ORDER_STATUS),
      default: ORDER_STATUS.PENDING,
    },

    shipping_address: {
      type: {
        state: {
          type: String,
          required: [true, "State is required"],
        },

        district: {
          type: String,
          required: [true, "District is required"],
        },
        city: {
          type: String,
          required: [true, "City is required"],
        },
        street: {
          type: String,
          required: [true, "Street is required"],
        },
      },
      required:[true,'Shipping address is required.']
    },

    payment_method: {
      type: String,
      enum: ["COD", "KHALTI", "ESEWA"],
      default: "COD",
    },
  },
  { timestamps: true }
);

const Order = mongoose.model("order", orderSchema);
export default Order;
