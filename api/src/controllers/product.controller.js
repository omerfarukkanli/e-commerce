import Product from "../models/product.model.js"
import mongoose from "mongoose"

export const createProduct = async (req, res) => {
    const { productCode, productName, productModel, productSize, productQuantity, productSale } = req.body
    const newProduct = await Product.findOne({ productCode })
    if (newProduct) res.status(400).json({ message: "Product already exists" })

    const product = Product.create({
        productCode, productName, productModel, productSize, productQuantity, productSale
    })
    res.status(200).save(product);
}
export const updateProduct = async (req, res) => {
    const { id } = req.params;
    const { productCode, productName, productModel, productSize, productQuantity, productSale } = req.body

    if (!mongoose.Types.ObjectId.isValid(id)) res.status(404).json({ message: `there is no such product ${id}` })
    const updatedProduct = { productCode, productName, productModel, productSize, productQuantity, productSale, _id: id }
    await Product.findByIdAndUpdate(id, updatedProduct)
    res.json(updatedProduct)
}

export const deletePost = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) res.status(404).json({ message: `there is no such product ${id}` })
    await Product.findByIdAndRemove(id)

    res.json({ message: "Product deleted" })
}

export const getAllProducts = async (req, res) => {
    try {
        const product = await Product.find()
        res.status(200).json(product)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const getProduct = async (req, res) => {
    const { id } = req.params
    try {
        const product = await Product.findById(id)
        res.status(200).json(product)

    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}
