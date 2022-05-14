import { combineReducers } from "redux";

import registerReducer from "./registerReducer";

import loginReducer from "./loginReducer";

import ProductReducer from "./ProductReducer.js";

import CartReducer from "./CartReducer";

const rootReducer = combineReducers({
    auth : registerReducer,
    login : loginReducer,
    product : ProductReducer,
    cart : CartReducer
})

export default rootReducer