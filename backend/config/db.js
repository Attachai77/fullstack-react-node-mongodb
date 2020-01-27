const mongoose = require('mongoose')
const mongoURL = 'mongodb://localhost:27017/myDB'

const Connection = async () => {
    try {
        mongoose.connect(mongoURL, {useNewUrlParser: true} )  
        console.log("Connected to DB !!");
    } catch (error) {
        console.log(e);
        throw e;
    }
}

module.exports = Connection
