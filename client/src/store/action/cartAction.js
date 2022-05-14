import * as Types from "../types/types";

import toast, { Toaster } from 'react-hot-toast';

import Axios from "axios";
import { Link } from "react-router-dom";

const token = localStorage.getItem("auth_token");

export const getCartAction = () => dispatch => {

    dispatch({
        type : Types.CART_LOADING,
        payload : {
            loading : true
        }
    })

    
    Axios.get("/api/user/cart",{
        headers : {
            Authorization : token
        }
    })
         .then(res => {
             console.log(res.data.cart)
            dispatch({
                type : Types.GET_CART,
                payload : {
                    cart : res.data.cart,
                    loading : false
                }
            })
         })
         .catch(error => {
             console.log(error)
         })
}

export const addToCartAction = (id) => dispatch  => {
    // toast("You must login to Add")
    toast.success("Your Shopping Cart Added");
    Axios.post(`/api/user/createaddtocart/${id}`, undefined, {
        headers : {
            Authorization : token
        }
    })
    .then(res => {
       console.log(res)
    })
    .catch(error => {
        console.log(error)
    })
} 