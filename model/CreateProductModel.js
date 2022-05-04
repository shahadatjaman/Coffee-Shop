const mongoose = require('mongoose')

const ProductModell = new mongoose.Schema({
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
    oldPrice  : {
        type : String,
        trim : true,
        required : true
    },
    discount : {
        type : String,
        trim : true,
        required : true
    },

    brand : String,
    productCode : String,
    availability : Boolean,
    avatar : String
})

const ProductModel = mongoose.model("Products", ProductModell)

module.exports = ProductModel