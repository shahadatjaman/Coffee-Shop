import {connect} from "react-redux"

import {Navigate} from 'react-router-dom'

const PrivateRoute = ({children, ...props}) => {
   
    const {isAuthenticated} = props.login
    return isAuthenticated ? children : <Navigate to={props.dirLink} />;
}

const mapStateToProps = state => {

    return {
        login : state.login
    }
}

export default connect(mapStateToProps)(PrivateRoute);