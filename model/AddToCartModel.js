const mongoose = require('mongoose')

const AddToCart = mongoose.Schema({
    coffeeName : {
        type : String,
        trim : true,
        required : true
    },
    price : {
        type : String,
        trim : true,
        required : true
    },
    oldPrice : {
        type : String,
        trim : true,
        required : true
    },
    avatar : String,
    createdAt  : String,
    author : mongoose.Schema.Types.ObjectId,
    productId :  mongoose.Schema.Types.ObjectId,

})


const AddCart = mongoose.model("Cart", AddToCart)


module.exports = AddCart