import mongoose from 'mongoose'

const ObjectId = mongoose.Schema.Types.ObjectId

const customerSchema = new  mongoose.Schema(
    {
        _id:{
            type:ObjectId,
            required:true
        },
        name:{
            type:String,
            required:true
        },
        phone:{
            type:String,
            required:true
        },
        password:{
            required:true,
            type:String
        },
        image:String,
        email:String,
        updatedAt:{
            type:Date,
            default:Date.now
        }
    }

    
)


module.exports = mongoose.model('Customer',customerSchema);
