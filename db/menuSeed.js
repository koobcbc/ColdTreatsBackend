const mongoose = require("./connections.js");
const db = mongoose.connection
const Menu = require("../models/menuModel");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {

    await Menu.deleteMany({})
  
    const menu = [
        {
            flavor: {
                flavor1:'Chocolate',
                flavor2: 'Vanilla',
                flavor3: 'Strawberry',
                flavor4: 'Cookies n Cream',
                flavor5: 'Mint Chocolate Chip',
                flavor6: 'Pistachio',
                flavor7: 'Birthday Cake',
                flavor8: 'Buttered Pecan'
            },
            holder: {
                holder1:'Cup',
                holder2: 'Bowl',
                holder3: 'Cone',
                holder4: 'Waffle Cone'
            },
            toppings: {
                topping1:'Oreos',
                topping2: 'Sprinkles',
                topping3: 'Gummy Bears',
                topping4: 'Peanuts',
                topping5: 'Peanut Butter Cups',
                topping6: 'Hot Fudge',
                topping7: 'Chocolate Sauce',
                topping8: 'Pecans'
            },
            size: {
                size1: 'Small',
                size2: 'Medium',
                size3: 'Large',
                size4: 'Extra-Large'
            }
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