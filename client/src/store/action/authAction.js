import * as Types from "../types/types";

import Axios from "axios";

import decoder from "jwt-decode";


export const authRegister = (user) => dispatch => {

           dispatch({
               type : Types.LOADING,
               payload : {
                   loading : true
               }
           })
        
    Axios.post('/api/user/register', user)
         .then(res => {
             const token = res.data.token
            
             localStorage.setItem("auth_token", token)

             const decoded = decoder(token)

            dispatch({
                type : Types.REGISTER,
                payload : {
                    loading : false,
                    user : decoded
                }
            })
            window.location.assign("/"); 
         })
         .catch(error => {
          
             dispatch({
                 type : Types.REGISTER_ERROR,
                 payload : {
                     error : error.response.data,
                     loading : false,
                     res : error.response
                 }
             })

         })
}

export const authLogin = (user) => dispatch => {
    Axios.post('/api/user/login', user)
         .then(res => {
            const token = res.data.token
    
             localStorage.setItem("auth_token", token)
             const decoded = decoder(token)
            dispatch({
                type : Types.REGISTER,
                payload : {
                    loading : false,
                    user : decoded
                }
            })
            window.location.assign("/"); 
         })
         .catch(error => {
             
            dispatch({
                type : Types.LOGIN_ERROR,
                payload : {
                    error : error.response.data,
                    loading : false,
                }
            })
            dispatch({
                type : Types.REGISTER_ERROR,
                payload : {
                    error : error.response.data,
                    loading : false,
                }
            })
         })
}

export const getProduct = () => dispatch => {
  
    dispatch({
        type : Types.LOADING_PRODUCT ,
        payload : {
            loading : true
        }
    })

    Axios.get("/api/user/product")
         .then(res => { 
           dispatch({
               type : Types.GET_PRODUCT,
               payload : {
                   product : res.data.product,
                   loading : false
               }
           })
         })
         .catch(error => {
             console.log(error)
         })
}