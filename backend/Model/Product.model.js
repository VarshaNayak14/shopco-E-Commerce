import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  discountPrice: { type: Number },
  img: { type: String, required: true },
  category: { type: String },
  rating: { type: Number, default: 0 },
  reviewsCount: { type: Number, default: 0 },
  popularity: { type: Number, default: 0 }
});

const Product = mongoose.model("Product", productSchema);
export default Product;