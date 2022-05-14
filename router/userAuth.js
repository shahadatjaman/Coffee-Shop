const router = require('express').Router()

const {register, login, createPost, createAddToCart, getProduct, product, getCart} = require('../controller/UserController')

const authenticate = require('../authenticate')
const { route } = require('express/lib/application')

router.post('/user/register', register)

router.post("/user/login", login)

router.post('/user/createpost', createPost)

router.post('/user/createaddtocart/:id',authenticate,createAddToCart)
router.get('/user/cart',authenticate ,getCart)

router.get("/user/product",getProduct)

router.get("/user/product/:id", product)

module.exports = router