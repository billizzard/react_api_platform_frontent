import React, {Component} from 'react';
import { Route, Redirect } from 'react-router-dom';
import { getUserRoles } from "../../helpers/storage_helper";

class PrivateRoute extends Component {

    isUserHasPermissions = () => {
        const userRoles = getUserRoles()
        if (this.props.roles && userRoles) {
            return userRoles.some(role => this.props.roles.includes(role))
        }

        return false;
    }

    render() {
        return (
            this.isUserHasPermissions() ?
            <div>
                <Route {...this.props}/>
            </div>
                : <Redirect to='/security/login'/>
        );
    }
}

export default PrivateRoute