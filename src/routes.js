import React, {Component} from 'react';
import { Route, Switch} from 'react-router-dom';

// COMPONENTS
import Home from './components/pages/Home'
import Registration from './components/pages/Registration'
import Login from './components/pages/Login'
import IndexRoom from './components/pages/private/IndexRoom'
import PrivateRoute from './components/auth/PrivateRoute'
import {ROLE_USER} from "./constants/roles";
import NotFound from "./components/pages/NotFound";

class Routes extends Component {
    render() {
        return(
            <Switch>
                <Route path="/security/login" exact component={Login}/>
                <Route path="/security/registration" exact component={Registration}/>
                <PrivateRoute
                    path="/room"
                    roles={[ROLE_USER]}
                    exact
                    component={IndexRoom}
                />
                <Route path="/" exact component={Home}/>
                <Route component={NotFound}/>
            </Switch>
        )
    }
}

export default Routes;