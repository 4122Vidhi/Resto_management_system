const mongoose = require('mongoose');
const Schema=mongoose.Schema;

const UserSchema = new Schema({
    name:{
        type: String,
        requireed: true,
    },
    email:{
        type: String,
        requireed: true,
        unique: true
    },
    password:{
        type: String,
        requireed: true,
    }
});

const UserModel= mongoose.model('user',UserSchema);
module.exports = UserModel;