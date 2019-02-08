import React, {Component} from 'react';
import { Route, Switch} from 'react-router-dom';

// COMPONENTS
import Home from './components/pages/Home'
import Registration from './components/pages/Registration'

class Routes extends Component {
    render() {
        return(
            <Switch>
                <Route path="/security/registration" exact component={Registration}/>
                <Route path="/" exact component={Home}/>
            </Switch>
        )
    }
}

export default Routes;