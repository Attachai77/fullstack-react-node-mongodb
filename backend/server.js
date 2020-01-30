const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000
const route = require('./route/index')
const Connection = require('./config/db') 

const { handleError, ErrorHandler } = require('./helpers/errorHandler')

//Access Controle
app.use(function(req, res, next) {
     res.header("Access-Control-Allow-Origin", "*"); 
     res.header("Access-Control-Allow-Headers", "*");
     res.header("Access-Control-Allow-Methods", "*"); 
     next();
});

// Middleware
app.use(express.json())
app.use('/api', route)

//Database Connection
Connection()

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