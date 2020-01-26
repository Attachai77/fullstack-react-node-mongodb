const express = require('express');
const mongoose = require('mongoose')

const app = express();
const PORT = process.env.PORT || 3000
const route = require('./route/index') 

const { handleError, ErrorHandler } = require('./helpers/errorHandler')

// Middleware
app.use(express.json())
app.use('/api', route)

mongoose.connect('mongodb://localhost:27017/myDB', {   useNewUrlParser: true    })

app.get('/',(req, res, next)=>{
     res.send("Home")
     // throw new ErrorHandler(500, 'Internal server error');
})

//Error Handler
app.use((err, req, res, next) => {
     handleError(err, res);
});

app.listen(3000, () => {
     console.log("server status : running");
     console.log(`run on port : ${PORT}`);
});