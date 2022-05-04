import {connect} from "react-redux"
import {Navigate} from 'react-router-dom'

const PrivetRoute = ({auth, children}) => {
    console.log(auth)
    return auth ? children : <Navigate to="/" />
}


const  mapStateToProps = state => {
    console.log(state)
    return {
        auth : state.auth
    }
}

export default connect(mapStateToProps)(PrivetRoute)