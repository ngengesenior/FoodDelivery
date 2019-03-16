import mongoose from 'mongoose'
const ObjectId = mongoose.Schema.Types.ObjectId

const productSchema = new  mongoose.Schema({
    _id:ObjectId,
    productName:{
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

const Product = mongoose.model('Product',productSchema)


export default Product;


