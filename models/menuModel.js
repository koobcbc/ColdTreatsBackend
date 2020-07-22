const mongoose = require('../db/connections');


const menuSchema = new mongoose.Schema({
    flavor: [String],
    holder: [String],
    toppings: [String],
    size: [String]
})

const Menu = mongoose.model('menu', menuSchema);
module.exports = Menu;