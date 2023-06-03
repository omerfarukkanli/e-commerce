import mongoose from "mongoose";

const userSchema = mongoose.Schema({

    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        default: ''
    },
    createdDate: {
        type: Date,
        default: Date.now
    }
})
export default mongoose.model("User", userSchema);
