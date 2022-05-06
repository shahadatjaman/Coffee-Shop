import { combineReducers } from "redux";

import registerReducer from "./registerReducer";

import loginReducer from "./loginReducer";

import ProductReducer from "./ProductReducer.js";

const rootReducer = combineReducers({
    auth : registerReducer,
    login : loginReducer,
    product : ProductReducer
})

export default rootReducer