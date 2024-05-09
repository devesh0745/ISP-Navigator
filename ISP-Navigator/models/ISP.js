//Setting up the Schema
const mongoose=require('mongoose');

const ispSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    services:[
        {
            type:String,
            required:true
        }
    ],
    description:{
        type:String,
        required:true
    },
    pricing:{
        type:Number,
        required:true
    },
    rating:{
        type:Number,
        required:true
    },
    speed:{
        type:String,
        required:true
    },
    contact_number:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    speed:{
        type:String,
        required:true
    },
},{
    timestamps:true
});

const ISP=mongoose.model('ISP',ispSchema);
module.exports=ISP;