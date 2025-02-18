const cartModel = require("../model/cart.model");

const getCartData = async (req, res) => {
    const { _id } = req.userData
    try {
        const data = await cartModel.findOne({ userId: _id })
        if (!data.cart.length) {
            return res.status(200).json({ message: "No Product In Cart..." })
        }
        res.status(200).json({ message: "Product Get Succesfully....", cart: data.cart })
    } catch (error) {
        return res.status(400).json({ message: "No Product In Cart..." })
    }
}

const addToCart = async (req, res) => {
    const { id, img, himg, heading, price, sprice } = req.body;
    if (!id || !img || !himg || !heading || !price || !sprice) {
        return res.status(400).json({ message: "Fill All Fields..." })
    }
    const { _id } = req.userData
    const cart = {
        id, img, himg, heading, price, sprice, qty: 1
    }
    try {
        const iscart = await cartModel.find({ userId: _id })
        if (iscart.length > 0) {
            const isFind = await cartModel.find({ userId: _id }, { "cart": { $elemMatch: { "id": id } } })
            if (isFind[0].cart[0]) {
                let qty = isFind[0].cart[0].qty
                qty++
                cart.qty = qty
                await cartModel.findOneAndUpdate(
                    { userId: _id, "cart.id": id },
                    { $set: { "cart.$.qty": qty } }
                )
            } else {
                const oldCart = iscart[0].cart
                oldCart.push(cart)
                await cartModel.findOneAndUpdate({ userId: _id }, { $set: { cart: oldCart } })
            }
            res.status(200).json({ message: "Product Added To Cart...." })
        }
        else {
            const cartdata = await cartModel.create({ userId: _id, cart: [cart] })
            return res.status(200).json({ message: "Product Added To Cart..." })
        }
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
}


const productDeleteCart = async (req, res) => {
    const { _id } = req.userData
    const { deleteId } = req.params
    if (!deleteId) {
        return res.status(400).json({ message: "Id need For Delete.." })
    }
    try {
        const isFind = await cartModel.find({ userId: _id }, { "cart": { $elemMatch: { "id": deleteId } } })
        if (!isFind[0].cart[0]) {
            return res.status(400).json({ message: "This Product Not Found In Cart.." })
        }
        const isDelete = await cartModel.findOneAndUpdate({ userId: _id }, { $pull: { "cart": { "id": deleteId } } })
        if (!isDelete) {
            return res.status(400).json({ message: "Product Not Found..." })
        }
        res.status(200).json({ message: "Product Removed From Cart...." })
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
}

const productDec = async (req, res) => {
        const { productId } = req.params;
        const { _id } = req.userData
        try {
            const iscart = await cartModel.find({ userId: _id })
            if (iscart.length < 1) {
                return res.status(400).json({ message: "Nothing In User's Cart....." })
            }
            const isFind = await cartModel.find({ userId: _id }, { cart: { $elemMatch: { "id": productId } } })
            if (isFind[0].cart[0]) {
                if (isFind[0].cart[0].qty == 1) {
                    await cartModel.findOneAndUpdate({ userId: _id }, { $pull: { "cart": { "id": productId } } })
                    return res.status(200).json({ message: "Product Removed From Cart" })
                }
                let qty = isFind[0].cart[0].qty
                let cart = isFind[0].cart[0]
                qty--
                cart.qty = qty
                await cartModel.findOneAndUpdate(
                    { userId: _id, "cart.id": productId },
                    { $set: { "cart.$.qty": qty } }
                )
                return res.status(200).json({ message: "product Decreased From Cart..." })
            } else {
                return res.status(400).json({ message: "This Id's product not Found.." })
            }
        } catch (error) {
            return res.status(400).json({ message: error.message })
        }
}

const increaseQuantity = async (req, res) => {
    const { productId } = req.params;
    const { _id } = req.userData;
    try {
        const iscart = await cartModel.findOne({ userId: _id });
        if (!iscart) {
            return res.status(400).json({ message: "No cart found for the user" });
        }
        const isFind = iscart.cart.find(item => item.id == productId);
        if (isFind) {
            isFind.qty++;
            await cartModel.findOneAndUpdate(
                { userId: _id, "cart.id": productId },
                { $set: { "cart.$.qty": isFind.qty } }
            );
            return res.status(200).json({ message: "Product quantity increased in cart" });
        } else {
            return res.status(400).json({ message: "Product not found in cart" });
        }
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};




module.exports = { getCartData, productDeleteCart, addToCart, productDec, increaseQuantity }