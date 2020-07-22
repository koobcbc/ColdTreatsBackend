const mongoose = require('../db/connections');

const milkshakeSchema = new mongoose.Schema(
    {
        name: { type: String, required: true},
        flavor: { type: String, required: true },
        topping1: { type: String, required: false },
        topping2: {type: String, required: false},
        topping3: {type: String, required: false},
        size: { type: String, required: true},
        price: { type: Number, required: true},
        paid: { type: Boolean, required: true}
    }
    // ,
    // { timestamps: true },
)

const Milkshake = mongoose.model('Milkshake', milkshakeSchema)

module.exports = Milkshake