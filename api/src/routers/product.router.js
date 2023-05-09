import express from "express";
import { createProduct, updateProduct, deletePost, getAllProducts, getProduct } from "../controllers/product.controller.js"
import { loggedIn } from "../middleware/logger.js"

const router = express.Router()

router.get("/", getAllProducts)
router.get("/:id", getProduct)

router.post("/create", loggedIn, createProduct)
router.patch("/:id", loggedIn, updateProduct)
router.delete("/:id", loggedIn, deletePost)

export default router