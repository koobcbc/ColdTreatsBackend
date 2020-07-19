const mongoose = require("./connections.js");
const db = mongoose.connection
const IceCream = require("../models/iceCreamSeed");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {

    await IceCream.deleteMany({})
  
    const iceCream = [
        {
            name: 'Doug',
            flavor: 'chocolate',
            holder: 'cup',
            toppings: 'ores',
            size: 'large',
            price: 5.00
        },
        {
            name: 'Alex',
            flavor: 'vanilla',
            holder: 'bowl',
            toppings: 'sprinkles',
            size: 'large',
            price: 6.00
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