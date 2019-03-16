import mongoose from 'mongoose'
import {customerSchema} from './CustomerModel'
const ObjectId = mongoose.Schema.Types.ObjectId

const orderSchema = new mongoose.Schema({
    _id:{
        type:ObjectId,
        required:true
    },
    customer:{
        type:customerSchema,
        required:true
    },

    products:[],
    orderDate:{
        type:Date,
        default:Date.now
    }

})

module.exports = mongoose.model('Order',orderSchema)