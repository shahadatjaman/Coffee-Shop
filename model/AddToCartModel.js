const mongoose = require('mongoose')

const AddToCart = mongoose.Schema({
    name : {
        type : String,
        trim : true,
        required : true
    },
    price : {
        type : Number,
        trim : true,
        required : true
    },
    oldPrice : {
        type : String,
        trim : true,
        required : true
    },
    qty : Number,
    tottalPrice : Number,
    avatar : String,
    author : mongoose.Schema.Types.ObjectId,
    productId :  mongoose.Schema.Types.ObjectId,

})


const AddCart = mongoose.model("Cart", AddToCart)


module.exports = AddCart