import mongoose from "mongoose";

const sellerSchema = mongoose.Schema({
    sellerFullName: {
        type: String,
        required: true
    },
    email: {
        type: String, required: true, unique: true
    },
    password: {
        type: String,
        required: true
    },
    products: [{ type: mongoose.Types.ObjectId, ref: "Product" }]

})

export default mongoose.model("Seller", sellerSchema)