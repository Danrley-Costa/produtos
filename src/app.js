'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express()
const router = express.Router();

//connect MongoDB
mongoose.connect('mongodb+srv://danrley:159753456@caseshop.kklx4.gcp.mongodb.net/products?retryWrites=true&w=majority'); 

//carregar Models
const Product = require('./models/products');
const Customer = require('./models/customer');
const Order = require('./models/order');

//carregar Routs
const indexRoute = require('./routes/index');
const productsRoute = require('./routes/products');
const customerRoute = require('./routes/customer');
const orderRoute = require('./routes/order');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Chamando as rotas criadas.
app.use('/', indexRoute);
app.use('/products', productsRoute);
app.use('/customers', customerRoute );
app.use('/orders', orderRoute );


module.exports = app;