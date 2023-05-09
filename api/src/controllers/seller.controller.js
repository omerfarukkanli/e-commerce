import bycript from "bcryptjs"
import jwt from "jsonwebtoken"
import Seller from "../models/seller.model.js"
const secret = 'deneme'

export const signIn = async (req, res) => {
    const { email, password } = req.body
    try {
        const sellerClone = await Seller.findOne({ email })
        if (!sellerClone) res.status(404).json({ message: "User doesn't exist" })
        const correctPassword = bycript.compare(password, sellerClone.password)

        if (!correctPassword) res.status(400).json({ message: "wrong password" })
        const token = jwt.sign({ email: sellerClone.email, id: sellerClone._id }, secret)
        res.status(200).json({ result: sellerClone, token })

    } catch (error) {
        res.status(400).json({ error });
        console.log(error)
    }

}

export const signUp = async (req, res) => {
    const { sellerFullName, email, password } = req.body;
    try {
        const sellerClone = await User.findOne({ email })
        if (sellerClone) res.status(400).json({ message: "User already exists" })

        const hashedPassword = bcrypt.hash(password, 10)
        const result = Seller.create({
            sellerFullName,
            email,
            hashedPassword,
        })
        const token = jwt.sign({ email: sellerClone.email, id: sellerClone._id }, secret)
        res.status(201).json({ result, token })
    } catch (error) {
        res.status(400).json({ error });
        console.log(error)
    }

}