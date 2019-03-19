const express = require('express')
const bodyParser = require('body-parser')
const port = 3000
const hostname = '127.0.0.1'
const app = express()

const product = require('./routes/product')// Imports routes for the products
const customer = require('./routes/customer') // Imports routes for the customer
const order = require('./routes/order') // Imports routes for the order

// Set up mongoose connection
const mongoose = require('mongoose');
let dev_db_url = 'mongodb://localhost:27017/chop';
const mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.use('/products', product)
app.use('/customer', customer)
app.use('/order', order)


app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
});