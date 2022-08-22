const express = require('express');
const productModel = require("../models/product")


module.exports.addProduct = async (req, res) => {
    const product = new productModel(req.body)
    try {
        await product.save()
        res.status(201).json({
            status: "Successfully added a new product",
            data: {
                product
            }
        })
    } catch (error) {
        res.status(500).json({
            status: "Failed to add product",
            message: error
        })
    }

}

module.exports.updateProduct = async (req, res) => {
    try {
        const id = req.params.id;
        const updates = req.body
        const options = { new: true }
        const result = await productModel.findByIdAndUpdate(id, updates, options);
        res.send(result);

    } catch (error) {
        res.status(500).json({
            status: "Failed to update product",
            message: error
        })
    }
}

