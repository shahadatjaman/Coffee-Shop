import * as Types from "../types/types"

const init = {
   wishData : {},
   loading : false,
}

const WishListReducer = (state = init, action) => {
    switch (action.type) {
        case Types.WISH_LIST:
            return {
            wishData : action.payload.wishdata,
            loading : action.payload.loading
            }
        
            case Types.LOADING_WISH_LIST : 
            console.log(action.payload.loading)
            return {
                loading : action.payload.loading
            }
        default:
            return state;
    }
}

export default WishListReducer