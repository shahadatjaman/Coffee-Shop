const validator = require('validator')


 const RegisterValidaion = (user, text) => {
    
    const {firstName, lastName, email, phone, password, confirmpassword} = user;

    const error = {}
     if(!firstName){
        error.firstName = "Enter your first name!"
     }
     if(!lastName){
         error.lastName = "Enter your last name!"
     }
     if(!email){
         error.email = "Enter your Email"
     }else if(!validator.isEmail(email)){
         error.email = "Enter an Valid Email!"
     }else if(text){
         error.email = text
     }
     if(!phone){
         error.phone = "Enter your phone number!"
     }else if(!phone.length < 11 && phone.length > 14){
          error.phone = "Enter an valid bd number" 
     }
     if(!password){
         error.password = "Enter an Strong password!"
     }
     
     if(!confirmpassword){
        error.confirmpassword = "Provide your confirmpassword"
    }else if(password !== confirmpassword){
        error.confirmpassword = "password doesn't match!"
    }

     return {
         error,
         isValid : Object.keys(error).length === 0
     }

 }

 module.exports = RegisterValidaion