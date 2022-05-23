import {legacy_createStore as createStore,applyMiddleware, compose} from "redux"
import rootReducer from "./reducer/rootReducer"
import thunk from "redux-thunk"

const middleware = [thunk]
const store = createStore(rootReducer, compose(
  applyMiddleware(...middleware),
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
) )


export default store