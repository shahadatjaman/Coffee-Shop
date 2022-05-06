import {connect} from "react-redux"

import {Navigate} from 'react-router-dom'

const OutletRoute = ({children, ...props}) => {
   
    const {isAuthenticated} = props.login
    console.log(isAuthenticated)
    return isAuthenticated ? <Navigate to={props.dirLink} /> : children;
}

const mapStateToProps = state => {

    return {
        login : state.login
    }
}

export default connect(mapStateToProps)(OutletRoute);