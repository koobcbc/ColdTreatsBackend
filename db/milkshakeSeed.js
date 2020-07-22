const mongoose = require("./connections.js");
const db = mongoose.connection
const Milkshake = require("../models/milkshakeModels");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {

    await Milkshake.deleteMany({})
  
    const milkshake = [
        {
            name: 'Joe',
            flavor: 'Cookies n Cream',
            topping1: 'oreos',
            topping2: 'hot fudge',
            topping3: 'sprinkles',
            size: 'large',
            price: 7.00,
            paid: true
        },
        {
            name: 'Brian',
            flavor: 'Pistachio',
            topping1: 'peanuts',
            topping2: 'oreos',
            topping3: 'hot fudge',
            size: 'large',
            price: 7.00,
            paid: false
        },
    ]
  
    await Milkshake.insertMany(milkshake);
    console.log("Created some items!");
  };
  const run = async () => {
    await main();
    db.close();
  };
  
  run();