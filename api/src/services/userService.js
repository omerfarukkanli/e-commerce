import User from "../models/user.model.js"

export const userFindOne = ({ email }) => {
    return User.findOne({ email })
}


export const createNewUser = ({ email, password, name }) => {
    return new User({
        email,
        password,
        name,
    })
}