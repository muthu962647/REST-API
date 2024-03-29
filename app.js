const express = require('express');
const app = express();
const morgan = require('morgan');

const productRoutes = require('./api/routes/products')
const orderRoutes = require('./api/routes/orders');
const { log } = require('console');


app.use(morgan('dev'));


app.use('/products', productRoutes)
app.use('/orders',orderRoutes)

app.use((req,res,next) => {

   console.log("In");
    const error = new Error('Not FOUND');
    error.status = 404;
    next(error);

})

app.use((error,req,res, next) => {
    res.status(error.status || 500);
    res.json({
        error:{
            message: error.message
        }
    })
})




module.exports = app;