import * as Types from "../types/types"

const init = {
    cartData : {},
    loading : false,
    cartPrices : {},
    addedTolading : false
}

const CartReducer = (state = init, action) => {

    switch (action.type) {
   
        case Types.GET_CART:
            console.log(action.payload.cartItems)
            return {
                cartData : action.payload.cartItems,
                loading : action.payload.loading,
                cartPrices : action.payload.cartPrice
            }
    
        case Types.CART_LOADING : 

        return {
            loading : action.payload.loading,
            cartData : {},
            cartPrices : {}
        }

        case Types.INCREMENT :
         console.log(action.payload.productId)
        return {
          
        }

        case Types.ADD_TO_CART : 
           state.cartPrices = action.payload.cartPrices;
           state.addedTolading = action.payload.loading
        return {
        //    cartPrices : action.payload.cartPrices,
        //    addedTolading : action.payload.loading
        ...state
        }
       case Types.ADDED_TO_LOADING :

       return {
           addedTolading : action.payload.loading,
       }
       
       case Types.DELETE_CART : 

       return {
           ...state,
           cartData : state.cartData.filter(item => item._id !== action.payload.id),
           cartPrices : action.payload.cartPrices
       }
        default:
            return state
    }

}

export default CartReducer