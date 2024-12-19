const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    fullname:{
        type: String,
        required: true,
        minlength: [3, 'First name must be atleast 3 characters long'],
    },
    lastname:{
        type: String,
        // required: true,
        minlength: [3, 'Last name must be atleast 3 characters long'],
    },
    email:{
        type: String,
        required: true,
        unique: true,
        minlength: [5, 'Email must be atleast 5 characters long'],
    },
    password:{
        type: String,
        required: true,
        select: false,
    },

    // to track live
    socketId:{
        type: String,
    }
});

// instance methods
userSchema.methods.generateAuthToken = function(){
    const token = jwt.sign({_id: this._id}, process.env.JWT_SECRET);
    return token;
}

userSchema.methods.comparePassword = async function(){
    return await bcrypt.compare(password, this.password);
}

// static method
userSchema.statics.hashPassword = async function(){
    return await bcrypt.hash(password, 10);
}


const userModel = mongoose.model('user', userSchema);
module.exports = userModel;