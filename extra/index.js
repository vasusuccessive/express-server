const express = require('express');
const bodyParser = require('body-parser')
const morgan = require('morgan')
const Diamond = require('../patterns/Diamond pattern')
const Equilateral = require('../patterns/EquilateralTriangle')
const constant = require('./constants');
const hasPermission = require('../utils/permissions')
const validateUsers = require('../utils/validation')

const users = [{
    traineeEmail: 'trainee1@successive.tech',
    reviewerEmail: 'reviewer1@successive.tech',
}]
let size = process.argv.slice(2)
size = constant.number
Diamond(parseInt(size));
Equilateral(parseInt(size))
hasPermission(constant.permissionData)
validateUsers(users)

const app = express();
app.use(bodyParser.json());
app.use(morgan('dev'));



app.use((req,res,next)=>{
    const error =new Error('not found');
    error.status= 404;
    next(error);
})

//server
const PORT = process.env.PORT || 8080;
app.listen(PORT,() => {
    console.log(`app is running at ${PORT}`);
});


module.exports =app;