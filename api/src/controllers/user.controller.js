import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import User from '../models/user.model.js'

const secret = 'deneme'


export const signin = async (req, res) => {
    const { email, password } = req.body;
    try {
        const userClone = await User.findOne({ email })
        if (!userClone) res.status(404).json({ message: "User doesn't exist" })

        const correctPasswod = bcrypt.compare(password, userClone.password)
        if (!correctPasswod) res.status(400).json({ message: "wrong password" })

        const token = jwt.sign({ email: userClone.email, id: userClone._id }, secret)
        res.status(200).json({ result: userClone, token })
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong' });
        console.log(error)
    }
}

export const signup = async (req, res) => {
    const { fullName, email, password } = req.body;
    try {
        const userClone = await User.findOne({ email })
        if (userClone) res.status(400).json({ message: "User already exists" })

        const hashedPassword = bcrypt.hash(password, 10)
        const result = User.create({
            fullName,
            email,
            hashedPassword,
        })
        const token = jwt.sign({ email: userClone.email, id: userClone._id }, secret)
        res.status(201).json({ result, token })
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong' });
        console.log(error)
    }

}