import * as Types from "../types/types";

import Axios from "axios";

import decoder from "jwt-decode";

import toast, { Toaster } from 'react-hot-toast';

export const authRegister = (user,navigate) => dispatch => {

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
            // window.location.assign("/"); 
            navigate("/account")
         })
         .catch(error => {
             console.log(error.response.data.message !== undefined)
             dispatch({
                 type : Types.REGISTER_ERROR,
                 payload : {
                     error : error.response.data,
                     loading : false,
                     isTakenEmail : error.response.data.message ? error.response.data.message : null
                 }
             })

         })
}

export const authLogin = (user,history) => dispatch => {
    console.log(history)
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
            history.push("/"); 
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

export const logout = (Navigate) => dispatch => {
    console.log(Navigate)
   localStorage.removeItem("auth_token")
   dispatch({
       type : Types.SET_USER,
       payload : {
           user : {}
       }
   });
   <Navigate to="/accoutn/login" />
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