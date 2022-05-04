const mongoose = require('mongoose')

const WishListModel = mongoose.Schema({
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
    wishListCount : Number,

})


const WishModel = mongoose.model("Wish", WishListModel)


module.exports = WishModel