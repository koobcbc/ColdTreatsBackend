const mongoose = require("./connections.js");
const db = mongoose.connection
const Menu = require("../models/menuModel");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {

    await Menu.deleteMany({})
  
    const menu = [
        {
            flavor: ['Chocolate', 'Vanilla', 'Strawberry', 'Cookies n Cream', 'Mint Chocolate Chip'],
            toppings: ['Oroes', 'Sprinkles', 'Gummy Bears'],
            size: ['small', 'medium', 'large']
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