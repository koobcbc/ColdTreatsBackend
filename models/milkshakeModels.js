const mongoose = require('../db/connections');

const milkshakeSchema = new mongoose.Schema(
    {
        name: { type: String, required: true},
        flavor: { type: String, required: true },
        toppings: { type: String, required: true },
        size: { type: String, required: true},
        price: { type: Number, required: true}
    }
    // ,
    // { timestamps: true },
)

const Milkshake = mongoose.model('Milkshake', milkshakeSchema)

module.exports = Milkshake