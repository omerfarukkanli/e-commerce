import mongoose from "mongoose";

const companySchema = mongoose.Schema({
    companyName: {
        type: String,
        required: true
    },
    companyAddress: {
        type: String,
        required: true
    },
    companyPhone: {
        type: String,
        required: true
    }
})

export default mongoose.model("Company", companySchema)