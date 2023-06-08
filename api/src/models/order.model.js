import mongoose from "mongoose";
const OrderSchema = mongoose.Schema({
    orderCode: { type: String, required: true, unique: true },
    user: { type: mongoose.Types.ObjectId, ref: "User" },
    saller: { type: mongoose.Types.ObjectId, ref: "Seller" },
    products: [{ type: mongoose.Types.ObjectId, ref: "Product" }],
    createdDate: { default: Date.now() },
    updatedDate: { default: Date.now() }//created updated 
    //created updated 
})

export default mongoose.model("Order", OrderSchema)