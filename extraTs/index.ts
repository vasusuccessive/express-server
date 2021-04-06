const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan');
// import Diamond from './patterns/Diamond_pattern.ts'
// // const { Diamond } = ?require('./patterns/Diamond_pattern')
// console.log(Diamond(8));
// 

const app = express();

app.use(function (req, res, next) {
    var err = new Error('Not Found');
    res.status(404); 
    next(err);
});
app.use(bodyParser.json());
app.use(morgan('dev'));


//server
const PORT = process.env.PORT || 8080;
app.listen(PORT,() => {
    console.log(`app is running at ${PORT}`);
});


exports.module =app;