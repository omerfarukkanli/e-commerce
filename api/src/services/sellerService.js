import Seller from "../models/seller.model.js"

export const sellerFindOne =  ({ email }) => {
    return Seller.findOne({ email })
}