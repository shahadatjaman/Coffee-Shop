const User = require('../model/RegisterModel')

const bcrypt = require('bcrypt')

const jwt = require('jsonwebtoken')

const {PRIVET_KEY} = require('../config')

const ProductModel = require("../model/CreateProductModel")

const WishModel = require('../model/WishListModel')

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
                            wishList : []
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
    createWishList(req, res){
      const produId = req.params.id
      const userId = req.user._id
      ProductModel.findById(produId)
                  .then(data => {


                      WishModel.findOne({productId : produId})
                               .then(result => {
                                

                                if(result){
                                    return res.status(200).json({
                                        message : "Already added!"
                                    })
                                }
                                   
                                
                                const newWish = new WishModel({
                                    coffeeName : data.coffeeName,
                                    price : data.price,
                                    oldPrice : data.oldPrice,
                                    avatar : data.avatar,
                                    createdAt : data.createdAt,
                                    author : userId,
                                    productId : data._id,

                                })
                                newWish.save()
                                       .then(result2 =>{
                                         const updateduser = {...req.user._doc}
                                          updateduser.wishList.push(result2._id)

                                          User.findByIdAndUpdate(updateduser._id, {$set : updateduser}, {new : true})
                                          .then(user => {
                                               res.status(200).json({
                                                   message : "Added you Wishlist",
                                                   user : user
                                               })
                                          })
                                          .catch(error => {
                                            res.status(500).json({
                                                message : "There was an server error"
                                            })
                                          })
                                       })

                                       .catch(err => {
                                           console.log(err.message)
                                        res.status(500).json({
                                            message : "There was an server error"
                                        })
                                       })

                               })
                               .catch(err => {
                                console.log("error to find wish data" + err.message)
                                   res.status(500).json({
                                       message : "There was an server error"
                                   })
                               })
                  })
                  .catch(err => {
                      res.status(500).json({
                        message : "There was an server error"
                      })
                  })

    },
    getWishList(req, res){

    },
    getProduct(req, res){
        ProductModel.find()
                    .then(data => {
                      res.status(200).json({
                          product : data
                      })
                    })
                    .catch(error => {
                        res.status(500).json({
                            message : "Server Error Occurred!"
                        })
                    })
    }

       
}