const mongoose = require('../db/connections');

const flavorSchema = new mongoose.Schema([
    {
        flavor1: {type: String, required: true}
    },
    {
        flavor2: {type: String, required: true}
    },
    {
        flavor3: {type: String, required: true}
    },
    {
        flavor4: {type: String, required: true}
    },
    {
        flavor5: {type: String, required: true}
    },
    {
        flavor6: {type: String, required: true}
    },
    {
        flavor7: {type: String, required: true}
    },
    {
        flavor8: {type: String, required: true}
    }
])

const holderSchema = new mongoose.Schema([
    {
        holder1: {type: String, required: true}
    },
    {
        holder2: {type: String, required: true}
    },
    {
        holder3: {type: String, required: true}
    },
    {
        holder4: {type: String, required: true}
    }
])

const toppingsSchema = new mongoose.Schema([
    {
        topping1: {type: String, required: true}
    },
    {
        topping2: {type: String, required: true}
    },
    {
        topping3: {type: String, required: true}
    },
    {
        topping4: {type: String, required: true}
    },
    {
        topping5: {type: String, required: true}
    },
    {
        topping6: {type: String, required: true}
    },
    {
        topping7: {type: String, required: true}
    },
    {
        topping8: {type: String, required: true}
    },
])

const sizeSchema = new mongoose.Schema([
    {
        size1: {type: String, required: true}
    },
    {
        size2: {type: String, required: true}
    },
    {
        size3: {type: String, required: true}
    },
    {
        size4: {type: String, required: true}
    }
])

const menuSchema = new mongoose.Schema({
    flavor: [flavorSchema],
    holder: [holderSchema],
    toppings: [toppingsSchema],
    size: [sizeSchema]
})

const MenuCream = mongoose.model('menu', menuSchema);
module.exports = MenuCream;