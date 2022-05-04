const validator = require('validator')


 const LoginValidaion = (user) => {
    
    const {email, password} = user;

    const error = {}

     if(!email){
         error.email = "Enter your Email"
     }else if(!validator.isEmail(email)){
         error.email = "Enter an Valid Email!"
     }
     
     if(!password){
         error.password = "Enter  password!"
     }


     return {
         error,
         isValid : Object.keys(error).length === 0
     }

 }

 module.exports = LoginValidaion