const express = require('express');
const bodyParser = require('body-parser');
const port = 3000;
const hostname = '127.0.0.1';
const app = express();

const Customer = require('./models1/Customer');
const product = require('./routes/product.route'); // Imports routes for the products

// Set up mongoose connection
const mongoose = require('mongoose');
let dev_db_url = 'mongodb://harisu:chop1234@localhost:3306/chop';
const mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))

app.use('/products', product);
app.use('/customer', product);


app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});