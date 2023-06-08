import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

export const passwordHash = (password) => {
    return bcrypt.hash(password, 10)
}

export const passwordCompare = (password, hashedPassword) => {
    return bcrypt.compare(password, hashedPassword)
}

export const jwtSign = ({ email, id }) => {
    const secret = 'deneme'
    return jwt.sign({ email: email, id: id }, secret)
}