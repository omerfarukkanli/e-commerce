import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    productCode: { type: String, require: true, unique: true },
    productName: { type: String, require: true },
    productModel: { type: String, require: true },
    productSize: { type: String, require: true },
    productQuantity: { type: Number, require: true },
    productSale: { type: Number, require: true },
})


export default mongoose.model("Product", productSchema)