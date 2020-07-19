const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/iceCream', { useNewUrlParser: true })

mongoose.Promise = Promise

module.exports = mongoose