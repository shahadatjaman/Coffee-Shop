import Axios from "axios";

import * as Types from "../types/types"

export const productAction = ({id}) => dispatch => {

       dispatch({
         type : Types.LOADING_PRODUCT_DETAILS,
         payload : {
           loading : true
         }
       })
    Axios.get(`/api/user/product/${id}`)
         .then(res => {
           dispatch({
             type : Types.SINGLE_PRODUCT,
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