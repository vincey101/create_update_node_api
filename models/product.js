const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({

    name: {
        type: String,
        trim: true,
        required: true
    },
    stock: {
        type: Number,
        required: true

    },
    date: {
        type: Date,
        default: Date.now
    }
})

const product = mongoose.model('product', productSchema);
module.exports = product