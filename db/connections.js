const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/iceCream',  
{ 
    useUnifiedTopology: true, 
    useNewUrlParser: true, 
    useFindAndModify: false  
})

mongoose.Promise = Promise

module.exports = mongoose