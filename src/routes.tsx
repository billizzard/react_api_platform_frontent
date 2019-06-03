import React, {Component} from 'react';
import { Route, Switch} from 'react-router-dom';

// COMPONENTS
import Home from './containers/pages/Home'
import Registration from './containers/pages/security/Registration'
import Login from './containers/pages/security/Login'
import Logout from './containers/pages/security/Logout'
import ProductList from './containers/pages/private/product/ProductList'
import MessageList from './containers/pages/private/message/MessageList'
import IndexRoom from './containers/pages/private/IndexRoom'
import PrivateRoute from './components/auth/PrivateRoute'
import {ROLE_USER} from "./constants/roles";
import NotFound from "./containers/pages/NotFound";
import ProductCreate from "./containers/pages/private/product/ProductCreate";

class Routes extends Component {
    render() {
        return(
            <Switch>
                <Route path="/security/login" exact component={Login}/>
                <Route path="/security/logout" exact component={Logout}/>
                <Route path="/security/registration" exact component={Registration}/>
                <PrivateRoute
                    path="/room/products"
                    roles={[ROLE_USER]}
                    exact
                    component={ProductList}
                />
                <PrivateRoute
                    path="/room/messages"
                    roles={[ROLE_USER]}
                    exact
                    component={MessageList}
                />
                <PrivateRoute
                    path="/room/products/create"
                    roles={[ROLE_USER]}
                    exact
                    component={ProductCreate}
                />
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