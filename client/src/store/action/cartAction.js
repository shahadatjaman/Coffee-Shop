import * as Types from "../types/types";

import toast from 'react-hot-toast';

import Axios from "axios";



const token = localStorage.getItem("auth_token");

export const getCartAction = (_id) => dispatch => {

    dispatch({
        type : Types.CART_LOADING,
        payload : {
            loading : true
        }
    })

    
    Axios.get(`/api/user/cart/${_id}`,{
        headers : {
            Authorization : token
        }
    })
         .then(res => {
            dispatch({
                type : Types.GET_CART,
                payload : {
                    cartItems : res.data.cart,
                    loading : false,
                    cartPrice : res.data.cartPrices
                }
            })
            // dispatch({
            //     type : Types.CART_PRICES,
            //     payload : {
            //         cartPrices : res.data.cartPrices
            //     }
            // })
         })
         .catch(error => {
             console.log(error)
         })
}

export const addToCartAction = (id) => dispatch  => {
    // toast("You must login to Add")
       dispatch({
           type : Types.ADDED_TO_LOADING,
           payload : {
               loading : true
           }
       })
    Axios.post(`/api/user/createaddtocart/${id}`, undefined, {
        headers : {
            Authorization : token
        }
    })
    .then(res => {
        dispatch({
            type : Types.ADD_TO_CART, 
            payload : {
                productId : id,
                loading : false,
                cartPrices : res.data.cartPrices
            }
        })
        toast.success("Your Shopping Cart Added");
    })
    .catch(error => {
        console.log(error.message)
    })
} 


export const getUser = () => dispatch => {
 Axios.get(`/api/user`, {
           headers :  token
         })
      .then(user => {
         dispatch({
             type : Types.USER,
             payload : {
                 user : user.data.user
             }
         })
      })
      .catch(error => {
         console.log(error)
      })
}

export const deleteCart = (id) => dispatch => {
    Axios.delete(`/api/cart/product/${id}`, {
        headers : {
            Authorization : token
        }
        })
         .then(res => {
            dispatch({
                type : Types.DELETE_CART,
                payload : {
                    id : id,
                    cartPrices : res.data.cartPrices
                    
                }
            })
         })
         .catch(error => {
             console.log(error.message)
         })
} 