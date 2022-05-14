import * as Types from "../types/types"

const init = {
    cartData : {},
    loading : false,
}

const CartReducer = (state = init, action) => {

    switch (action.type) {
        case Types.GET_CART:
            
            return {
                cartData : action.payload.cart,
                loading : action.payload.loading
            }
    
        case Types.CART_LOADING : 

        return {
            loading : action.payload.loading
        }
        default:
            return state
    }

}

export default CartReducer