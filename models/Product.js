const mongoose = require('mongoose');

const ObjectId = mongoose.Schema.Types.ObjectId

const productSchema = new  mongoose.Schema({
    id:Number,
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    category:String,
    image:String,
    description:String
});

module.exports = mongoose.model('Product',productSchema)
