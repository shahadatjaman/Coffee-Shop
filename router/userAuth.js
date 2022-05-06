const router = require('express').Router()

const {register, login, createPost, createWishList, getProduct, product} = require('../controller/UserController')

const authenticate = require('../authenticate')

router.post('/user/register', register)

router.post("/user/login", login)

router.post('/user/createpost', createPost)

router.post('/user/createwishlist/:id',authenticate,createWishList)

router.get("/user/product",getProduct)

router.get("/user/product/:id", product)

module.exports = router