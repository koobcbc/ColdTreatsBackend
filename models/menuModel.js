const mongoose = require('../db/connections');

const menuSchema = new mongoose.Schema({
    flavor: {type: String, required: true},
    holder: {type: String, required: true},
    toppings: {type: String, required: true},
    size: {type: String, required: true}
})

const MenuCream = mongoose.model('menu', menuSchema);
module.exports = MenuCream;