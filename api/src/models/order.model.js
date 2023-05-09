import mongoose from "mongoose";
const OrderSchema = mongoose.Schema({
    user: { type: mongoose.Types.ObjectId, ref: "User" },
    saller: { type: mongoose.Types.ObjectId, ref: "Seller" },
    products: [{ type: mongoose.Types.ObjectId, ref: "Product" }],
    date: { default: Date.now() }
})