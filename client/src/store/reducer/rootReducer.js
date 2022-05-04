import { combineReducers } from "redux";

import registerReducer from "./registerReducer";

import loginReducer from "./loginReducer";

import WishListReducer from "../reducer/wishReducer"

const rootReducer = combineReducers({
    auth : registerReducer,
    login : loginReducer,
    wishList : WishListReducer
})

export default rootReducer