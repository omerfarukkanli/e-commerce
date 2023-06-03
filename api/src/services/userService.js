import User from "../models/user.model.js"

export const userFindOne =  ({ email }) => {
    return User.findOne({ email })
}