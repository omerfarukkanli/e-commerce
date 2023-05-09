import express from "express";
import userRouter from "./user.router.js"
import sellerRouter from "./seller.router.js"

const router = express.Router()

router.use("/api", userRouter)
router.use("/api", sellerRouter)


export default router;