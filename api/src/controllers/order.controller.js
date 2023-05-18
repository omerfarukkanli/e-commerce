import Order from "../models/order.model.js"

export const createOrder = async (req, res) => {
    const { orderCode, userFullName, sellerFullName, productCode } = req.body
    const newOrder = await Order.findOne({ orderCode });
    if (newOrder) res.status(400).json({ message: "Order already exists" });

    const order = await Order.create({
        orderCode, userFullName, sellerFullName, productCode
    })
    res.save(order)
}

export const getOrderBySellerId = async (req, res) => {
    Order
        .where("_Id") in ("seller")
            .exec((req, res) => { 
                
            })

}