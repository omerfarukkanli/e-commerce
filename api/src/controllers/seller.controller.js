import Seller from '../models/seller.model.js'
import { sellerFindOne } from "../services/sellerService.js"
import { passwordHash, passwordCompare } from "../services/bycriptService.js"
import { jwtSign } from "../services/jwtService.js"


export const signIn = async (req, res) => {
    const { email, password } = req.body;
    try {
        const userClone = await sellerFindOne({ email })
        if (!userClone) res.status(404).json({ message: "User doesn't exist" })

        const correctPasswod = passwordCompare(password, userClone.password)
        if (!correctPasswod) res.status(400).json({ message: "wrong password" })

        const token = await jwtSign({ email: userClone.email, id: userClone._id })
        res.status(200).json({ result: userClone, token })
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong' });
        console.log(error)
    }
}

export const signUp = async (req, res) => {
    const { firstname, lastName, email, password } = req.body;

    try {
        const userClone = await sellerFindOne({ email })
        if (userClone) res.status(400).json({ message: "User already exists" })

        const hashedPassword = await passwordHash(password)
        const newUser = new Seller({
            email,
            password: hashedPassword,
            sellerName: `${firstname} ${lastName}`
        })
        await newUser.save()

        const token = await jwtSign({ email: newUser.email, id: newUser._id })
        res.status(201).json({ newUser, token })

    } catch (error) {
        res.status(500).json({ message: error.message });
        console.log(error)
    }

}