const express = require('express');
const app = express();
const cors = require('cors');
const logger = require('morgan');
const bodyParser = require('body-parser');
const iceCreamController = require('./controllers/iceCream');
const milkshakeController = require('./controllers/milkshakes');
const menuController = require('./controllers/menu')
const PORT = process.env.PORT || 3000

app.use(cors())
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.json())
app.use(bodyParser.json())
app.use(logger('dev'))

app.use('/api', iceCreamController);
app.use('/api', milkshakeController);
app.use('/api', menuController);

app.set("port", process.env.PORT || 3000);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});

// app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))