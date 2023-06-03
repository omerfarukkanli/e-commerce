import User from '../models/user.model.js'
import { userFindOne } from "../services/userService.js"
import { passwordHash, passwordCompare } from "../services/bycriptService.js"
import { jwtSign } from "../services/jwtService.js"


export const signin = async (req, res) => {
    const { email, password } = req.body;
    try {
        const userClone = await userFindOne({ email })
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

export const signup = async (req, res) => {
    const { firstname, lastName, email, password } = req.body;

    try {
        const userClone = await userFindOne({ email })
        if (userClone) res.status(400).json({ message: "User already exists" })

        const hashedPassword = await passwordHash(password)
        const newUser = new User({
            email,
            password: hashedPassword,
            name: `${firstname} ${lastName}`
        })
        await newUser.save()

        const token = await jwtSign({ email: newUser.email, id: newUser._id })
        res.status(201).json({ newUser, token })

    } catch (error) {
        res.status(500).json({ message: error.message });
        console.log(error)
    }

}