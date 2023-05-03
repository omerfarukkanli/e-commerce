import mongoose from "mongoose";

const sellerSchema = mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String, required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    company: { type: mongoose.Schema.Types.ObjectId, ref: "Company" }

})

export default mongoose.model("Seller", sellerSchema)