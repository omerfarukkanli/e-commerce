import express from "express"
import { signIn, signUp } from "../controllers/seller.controller.js"
const router = express.Router()

router.post("/sale/signin", signIn)
router.post("/sale/signup", signUp)

export default router

