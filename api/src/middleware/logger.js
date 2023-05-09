import jwt from "jsonwebtoken"
const secret = 'deneme'
export const loggedIn = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const payload = await jwt.verify(token, secret);
        req.user = payload;
        next();
    } catch (error) {
        res.status(400).json({ error })
    }
}
