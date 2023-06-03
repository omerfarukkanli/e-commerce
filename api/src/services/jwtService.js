import jwt from 'jsonwebtoken'

export const jwtSign = ({ email, id }) => {
    const secret = 'deneme'
    return jwt.sign({ email: email, id: id }, secret)
}