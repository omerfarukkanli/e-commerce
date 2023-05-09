import express from "express";
import userRouter from "./user.router.js"
import sellerRouter from "./seller.router.js"
import productRouter from "./product.router.js";
const router = express.Router()

router.use("/api", userRouter)
router.use("/api", sellerRouter)
router.use("/api", productRouter)

export default router;