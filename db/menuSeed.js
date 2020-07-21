const mongoose = require("./connections.js");
const db = mongoose.connection
const Menu = require("../models/menuModel");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {

    await Menu.deleteMany({})
  
    const menu = [
        {
            flavor: [
                'Chocolate',
                 'Vanilla',
                 'Strawberry',
                 'Cookies n Cream',
                 'Mint Chocolate Chip',
                 'Pistachio',
                 'Birthday Cake',
                 'Buttered Pecan'
            ],
            holder: [
                'Cup',
                 'Bowl',
                 'Cone',
                 'Waffle Cone'
            ],
            toppings: [
                'Oreos',
                 'Sprinkles',
                 'Gummy Bears',
                 'Peanuts',
                 'Peanut Butter Cups',
                 'Hot Fudge',
                 'Chocolate Sauce',
                 'Pecans'
            ],
            size: [
                 'Small',
                 'Medium',
                 'Large',
                 'Extra-Large'
            ]
        }
    ]
  
    await Menu.insertMany(menu);
    console.log("Created some menu items!");
  };
  const run = async () => {
    await main();
    db.close();
  };
  
  run();