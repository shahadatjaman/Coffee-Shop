import * as Types from "../types/types"

const init = {
    user : {},
    error : {},
    loading : false,
    isAuthenticated : false
}

const loginReducer = (state = init, action) => {
    switch (action.type) {
        case Types.LOGIN :
         console.log(action.payload.user)
        return {
            user : action.payload.user,
            error : {}
        }
            
        case Types.LOGIN_ERROR : 

        return {
            error : action.payload.error,
            loading : action.payload.loading
        }
        case Types.SET_USER : 
      
        return {
            user : action.payload.user,
            isAuthenticated : Object.keys(action.payload.user).length !== 0 && action.payload.user !== undefined
        }
        case Types.REGISTER : 
      
        return {
            user : action.payload.user,
            isAuthenticated : Object.keys(action.payload.user).length !== 0 && action.payload.user !== undefined
        }
        default:
            return state
    }
}

export default loginReducer