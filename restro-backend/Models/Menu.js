const { types, required } = require('joi');
const mongoose = require('mongoose');
const Schema=mongoose.Schema;

const MenuSchema = new Schema({
    name:{
        type: String,
        requireed: true,
    },
    category:{
        type: String,
        requireed: true,
    },
    description:{
        type: String,
        requireed: true,
    },
    price:{
        type: Number,
        required:true
    },
    status:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },

},
{ timestamps: true } 
);

const MenuModel= mongoose.model('menu',MenuSchema);
module.exports = MenuModel;