const mongoose = require('../db/connections');

const iceCreamSchema = new mongoose.Schema({
    name: {type: String, required: true},
    flavor: {type: String, required: true},
    holder: {type: String, required: true},
    toppings: {type: String, required: true},
    size: {type: String, required: true},
    price: {type: Number, required: true}
})

const IceCream = mongoose.model('iceCream', iceCreamSchema);
module.exports = IceCream;