import bcrypt from 'bcryptjs'

export const passwordHash = (password) => {
    return bcrypt.hash(password, 10)
}

export const passwordCompare = (password, hashedPassword) => {
    return bcrypt.compare(password, hashedPassword)
}