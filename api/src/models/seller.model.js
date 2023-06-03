import mongoose from "mongoose";

const sellerSchema = mongoose.Schema({

    email: {
        type: String, required: true, unique: true
    },
    password: {
        type: String,
        required: true
    },
    sellerName: {
        type: String,
        required: true
    },
    products: [{ type: mongoose.Types.ObjectId, ref: "Product" }]

})

export default mongoose.model("Seller", sellerSchema)