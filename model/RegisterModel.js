const mongoose = require('mongoose')

const UserModel = new mongoose.Schema({
    firstName : {
        type : String,
        trim : true,
        required : true
    },
    lastName : {
        type : String,
        trim : true,
        required : true
    },
    email : {
        type : String,
        trim : true,
        required : true
    },
    phone : {
        type : String,
        trim : true,
        required : true
    },
    password : {
        type : String,
        trim : true,
        required : true
    },
    CartList : {
        type : [{
            type : mongoose.Schema.Types.ObjectId,
            ref : "WishList"
        }]
    },
    cartCount : Number,
    cartTotallPrice : Number
})

const User = mongoose.model("users", UserModel)

module.exports = User


// First Name,
// Last Name
// E-mail
// Phone
// Password
// Confirmpassword