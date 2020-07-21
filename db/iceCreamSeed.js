const mongoose = require("./connections.js");
const db = mongoose.connection
const IceCream = require("../models/iceCreamModels");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {

    await IceCream.deleteMany({})
  
    const iceCream = [
        {
            name: 'Doug',
            flavor: 'chocolate',
            holder: 'cup',
            topping1: 'oreos',
            topping2: 'sprinkles',
            topping3: 'gummy bears',
            size: 'large',
            price: 5.00,
            paid: true
        },
        {
            name: 'Alex',
            flavor: 'vanilla',
            holder: 'bowl',
            topping1: 'sprinkles',
            topping2: 'hot fudge',
            topping3: 'choclate sauce',
            size: 'large',
            price: 6.00,
            paid: false
        },
    ]
  
    await IceCream.insertMany(iceCream);
    console.log("Created some items!");
  };
  const run = async () => {
    await main();
    db.close();
  };
  
  run();