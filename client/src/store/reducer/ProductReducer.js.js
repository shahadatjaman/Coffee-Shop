import * as Types from "../types/types"

const init = {
   product : [],
   loading : false
}

const ProductReducer = (state = init, action) => {
    switch (action.type) {
        case Types.SINGLE_PRODUCT:

            return {
              product : action.payload.product,
              loading : action.payload.loading
            }

            case Types.LOADING_PRODUCT_DETAILS : 
            return {
                loading : action.payload.loading
            }

        default:
            return state;
    }
}

export default ProductReducer