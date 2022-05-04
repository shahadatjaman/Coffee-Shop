import Axios from "axios";

import * as Types from "../types/types"

export const wishListAction = (id) => dispatch => {

    dispatch({
        type : Types.LOADING_WISH_LIST,
        payload : {
            loading : true
        }
    })
  const token = localStorage.getItem("auth_token")
    Axios.post(`/api/user/createwishlist/${id}`, undefined, {
        headers: {
            Authorization: token
          }
    })
         .then(res => {
           console.log(res)
            dispatch({
                type : Types.WISH_LIST,
                // wishdata : res.data,
                payload : {
                    loading : false
                }
            })
         })
         .catch(error => {
             console.log(error)
             dispatch({
                type : Types.LOADING_WISH_LIST,
                payload : {
                    loading : false
                }
            })
         })
}