const mongoose = require('mongoose')

// {useNewUrlParser ...} = to remove DeprecationWarning

const connectDB = (url) => {
    return mongoose
        .connect(url, {
            useNewUrlParser: true, 
            useCreateIndex: true, 
            useFindAndModify: false, 
            useUnifiedTopology: true
        })
}

module.exports = connectDB
