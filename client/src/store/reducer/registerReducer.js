import * as Types from "../types/types"

const init = {
    user : {},
    error : {},
    loading : false,
    isAuthenticated : false,
    product : {},
    loginError : {},
    product_Loading : true,
    isTakenEmail : ""
}

const authReducer = (state = init, action) => {

    switch (action.type) {
        case Types.REGISTER :
             return {
               error : {},
               loading : action.payload.loading,
             }
        
        case Types.REGISTER_ERROR : 

        return {
            ...state,
            error : action.payload.error,
            loading : action.payload.loading,
            isTakenEmail : action.payload.isTakenEmail
        }

        case Types.LOADING : 
        return {
            loading : action.payload.loading
        }

        case Types.SET_USER : 

         return {
             user : action.payload.user,
             isAuthenticated :  Object.keys(action.payload.user).length !== 0 && action.payload.user !== undefined
         }

       case Types.LOADING_PRODUCT : 

       return {
         product_Loading : action.payload.loading,
       }

       case Types.GET_PRODUCT :
           return {
            product : action.payload.product,
            product_Loading : action.payload.loading
           }  
        
        default: 
        return state
    }
}


export default authReducer