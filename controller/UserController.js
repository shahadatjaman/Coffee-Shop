const User = require('../model/RegisterModel')

const {PRIVET_KEY} = require('../config')

const bcrypt = require('bcrypt')

const jwt = require('jsonwebtoken')

const ProductModel = require("../model/CreateProductModel")

const AddCart = require('../model/AddToCartModel')

const RegisterValidaion = require('../Validator/registerValidation')

const LoginValidaion = require('../Validator/loginValidation')

module.exports = {
    register(req, res){
      const {
          firstName, 
          lastName, 
          email, 
          phone, 
          password,
          confirmpassword
        } = req.body

        const validated = RegisterValidaion({firstName,lastName, email, phone,password, confirmpassword})

        if(!validated.isValid){
            return res.status(400).json(validated.error)
        }

        User.findOne({email : email})
            .then(user => {
                
                if(user){
                    
                    return res.status(404).json({
                        message : "Your Email taken!"
                    })
                }
                bcrypt.hash(password, 10, (err, hash) => {
                    if(err){
                      return res.status(5000).json({
                          message : err.message
                      })
                    }else{
                        const newUserData = new User({
                            firstName,
                            lastName,
                            email,
                            phone,
                            password : hash,
                            cartList : [],
                            cartCount : 0,
                            cartTotallPrice : 0
                        })

                        
          
                        newUserData.save()
                                   .then(result => {
                                    const token = jwt.sign({
                                        _id : result._id,
                                        firstName,
                                        lastName,
                                        email,
                                        phone
                                    },PRIVET_KEY, {expiresIn : "72h"})
                                      res.status(200).json({
                                          token : `Bearer ${token}`,

                                      })
                                   })
                                   .catch(error => {
                                       console.log(error.message)
                                       res.status(500).json({
                                           message : "There was an server Error!"
                                       })
                                   })
                    }
                })
            })
            .catch(error => {
                res.status(500).json({
                    message : "Server Error Occurred!"
                })
            })

  
    },
    login(req, res){
        const {email,password} = req.body
        const validated = LoginValidaion({email,password})

        if(!validated.isValid){
            return res.status(400).json(validated.error)
        }
        User.findOne({email})
            .then(user => {
                if(!user){
                    return res.status(404).json({
                        message : "Your email or password was wrong!"
                    })
                }
           
                        
                    bcrypt.compare(password, user.password, (err, result) => {
                        if(err){
                            return res.status(500).json({
                                message : "There was an server error!"
                            })
                        }

                        if(!result){
                            return res.status(404).json({
                                message : "Your email or password was wrong!"
                            })
                        }

                      const token = jwt.sign({
                            _id : user._id,
                            email,
                            firstName : user.firstName,
                            lastName : user.lastName

                        },PRIVET_KEY, {expiresIn : "72h"})
          
                     res.status(200).json({
                            token : `Bearer ${token}` 
                        })
                    

                    });
            })
    },
    createPost(req, res){
        const {coffeeName, price, oldPrice, discount, avatar} = req.body
     const newData = new ProductModel({
        coffeeName,
        price,
        oldPrice,
        discount,
        avatar
     })

     newData.save()
            .then(result => {
                res.status(200).json({
                    message : result
                })
            })
            .catch(error => {
                res.status(500).json({
                    message : "There was an Server Error!"
                })
            })
    },
    createAddToCart(req, res){
        
      const productId = req.params.id
      const author = req.user._id
         
      ProductModel.findById({_id : productId})
                  .then(product => {

                    const isAddToCart = req.user._doc.CartList.includes(productId)
                            
                       if(isAddToCart){
                           // save cart item
                          AddCart.findOne({productId})
                                 .then(cart => {
                                   const updatedUser = {...req.user._doc};


                                         updatedUser.cartCount = updatedUser.cartCount + 1;

                                         updatedUser.cartTotallPrice = updatedUser.cartTotallPrice + cart.price;

                                         updatedUser.tottalPrice = updatedUser.tottalPrice + cart.price

                                         User.findByIdAndUpdate(author, {$set : updatedUser}, {new : true})
                                          .then(user => {

                                            const updatedCart = {...cart._doc}

                                                 updatedCart.qty = updatedCart.qty + 1;

                                                 updatedCart.tottalPrice = updatedCart.tottalPrice + cart.price

                                            AddCart.findByIdAndUpdate(cart._id, {$set : updatedCart}, {new : true})
                                                   .then(updatedCart => {

                                                    const cartPrices = {
                                                        cartCount : user.cartCount,
                                                        totallPrice : user.cartTotallPrice,
                                                      }
                                                    res.status(200).json({
                                                        cartPrices,
                                                        updatedCart
                                                    })
                                                   })
                                                   .catch(error => {
                                                       console.log(error.message)
                                                       res.status(500).json({
                                                           message : "there was an server error!"
                                                       })
                                                   })
                                          })
                                          .catch(error => {
                                              res.status(500).json({
                                                message : "Server error occurred!"
                                              })
                                          })
                                 })
                                 .cart(error => {
                                    res.status(500).json({
                                        message : "Server error occurred!"
                                    })
                                 })
                                  
                       }else{
                        // save cart item
                        const newCart = new AddCart({
                            name : product.coffeeName,
                            price : product.price,
                            oldPrice : product.oldPrice,
                            avatar : product.avatar,
                            author : author,
                            productId : productId,
                            qty : 1,
                            tottalPrice : product.price
                        })

                        newCart.save()
                               .then(cart => {

                                // updated user
                                  const updateduser = {...req.user._doc}
                                        
                                        updateduser.CartList.push(product._id)

                                        updateduser.cartCount = updateduser.cartCount + 1;

                                        updateduser.cartTotallPrice = updateduser.cartTotallPrice + product.price;

                                User.findByIdAndUpdate(author, {$set : updateduser}, {new : true})
                                    .then(user => {
                                        const cartPrices = {
                                            cartCount : user.cartCount,
                                            totallPrice : user.cartTotallPrice
                                          }
                                        res.status(200).json({
                                            cartPrices
                                        })
                                    })
                                    .catch(error => {
                                        res.status(500).json({
                                            message : "Server error occurred!"
                                        })
                                    })
                               })
                               .catch(error => {
                                   res.status(500).json({
                                       message : "Server error occurred!"
                                   })
                               })
                       }
                  })
                  .catch(errror => {

                  })

    },
    getCart(req, res){

          const {cartCount,cartTotallPrice} = req.user

          const _id = req.params.id

      AddCart.find({author : _id})
             .then(data => {
                 console.log(data)
                res.status(200).json({
                    cart : data,
                    cartPrices : {
                        cartCount : cartCount,
                        totallPrice : cartTotallPrice
                    }
                })
             })
             .catch(error => {
                 
                res.status(500).json({
                    message : error.message
                }) 
             })
    },
    getProduct(req, res){
        
        ProductModel.find()
                    .then(data => {
                      res.status(200).json({
                          product : data,
                          user : "f"
                      })
                    })
                    .catch(error => {
                        res.status(500).json({
                            message : "Server Error Occurred!"
                        })
                    })
    },
    getCartActivity(req, res){

        const userId = req.user._id

        User.findById(userId)
            .then(cart => {
                res.status(200).json({
                    cart : cart
                })
            })
            .catch(error => {
                res.status(500).json({
                    message : "There was an server error!"
                })
            })
    },
    product(req, res){
        const {id} = req.params

        ProductModel.findOne({_id : id})
                    .then(data => {
                      res.status(200).json({
                          product : data
                      })
                    })
                    .catch(error => {
                        console.log(error.message)
                       res.status(500).json({
                           message : "There was an sercer error!"
                       })
                    })

    },
    getUser(req, res){
        const userId = req.user._id
        console.log(userId)
       User.findOne(userId)
           .then(user => {
               const cartData = {
                count : user.cartCount,
                totallPrice : user.cartTotallPrice
               }
              res.status(200).json({
                   user : cartData
              })
           })
           .catch(error => {
            console.log(error.message)
            res.status(500).json({
                message : "There was an sercer error!"
            })
           })
    },
    deleteCart(req, res){
        const cartId = req.params.id.toString()

        const author = req.user._id
       
        AddCart.findByIdAndDelete({_id : cartId})
               .then(cart => {

                if(cart){
                    const userCartList = req.user._doc.CartList;

                    const index = userCartList.indexOf(cart.productId)
                      
                    if (index > -1) {
                          userCartList.splice(index, 1); // 2nd parameter means remove one item only
                      }

                    const updatedUser = {...req.user._doc};

                          updatedUser.CartList = userCartList;

                          updatedUser.cartCount = updatedUser.cartCount - cart.qty;

                          updatedUser.cartTotallPrice = updatedUser.cartTotallPrice - cart.tottalPrice

                          User.findByIdAndUpdate(author, {$set : updatedUser}, {new : true})
                              .then(user => {
                                   return res.status(200).json({
                                    cartPrices : {
                                        cartCount : user.cartCount,
                                        totallPrice : user.cartTotallPrice
                                    }
                                   })
                              })
                              .catch(error => {
                                  return res.status(500).json({
                                      message : "There was an server occured!"
                                  })
                              })
 
                }else{

                    return res.status(404).json({
                        message : 'cart not found!'
                    })
                }  

               })
               .catch(error => {
                   console.log(error.message)
                   res.status(500).json({
                       message : "server error occured!"
                   })
               })
    }
}