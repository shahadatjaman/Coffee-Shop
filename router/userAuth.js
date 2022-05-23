const router = require('express').Router()

const {register, getCartActivity,login, createPost, createAddToCart, getProduct, product, getCart, getUser, deleteCart} = require('../controller/UserController')

const authenticate = require('../authenticate')

router.post('/user/register', register)

router.post("/user/login", login)

router.post('/user/createpost', createPost)

router.post('/user/createaddtocart/:id',authenticate,createAddToCart)
router.get('/user/cart/:id',authenticate ,getCart)

router.get("/user/product",getProduct)

router.get("/user/product/:id", product)

router.get("/cart/product",authenticate, getCartActivity)

router.get('/user',authenticate, getUser)

router.delete('/cart/product/:id',authenticate, deleteCart)

module.exports = router