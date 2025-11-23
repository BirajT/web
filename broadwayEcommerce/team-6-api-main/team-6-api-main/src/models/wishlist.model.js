import mongoose from "mongoose";
//* user -> ref -> user collection
//* product  - > ref  -> product collection

const wishlistSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: [true, "user is required"],
    },
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "product",
      required: [true, "product is required"],
    },
  },
  { timestamps: true }
);

const Wishlist = mongoose.model("wishlist", wishlistSchema);
export default Wishlist;
