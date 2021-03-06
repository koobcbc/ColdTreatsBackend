const mongoose = require('../db/connections');

const iceCreamSchema = new mongoose.Schema({
    name: {type: String, required: true},
    flavor: {type: String, required: true},
    holder: {type: String, required: true},
    topping1: {type: String, required: false},
    topping2: {type: String, required: false},
    topping3: {type: String, required: false},
    size: {type: String, required: true},
    price: {type: Number, required: true},
    paid: {type: Boolean, required: true}
})

const IceCream = mongoose.model('iceCream', iceCreamSchema);
module.exports = IceCream;