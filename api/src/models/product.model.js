import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    productName: String,
    productModel: String,
    productSize: String,
    productQuantity: Number,
    productSale: Number,

})


export default mongoose.model("Product", productSchema)