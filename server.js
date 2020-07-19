const express = require('express');
const app = express();
const cors = require('cors')
const logger = require('morgan');
const itemsController = require('./controllers/items');
const PORT = process.env.PORT || 3000

app.use(cors())
app.use(express.urlencoded({ extended: false }));
app.use(express.json())
app.use(logger('dev'))

app.use('/api', itemsController);

app.set("port", process.env.PORT || 3000);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});

// app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))