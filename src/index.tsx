import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import thunk from 'redux-thunk'
import Routes from './routes'
import 'bootstrap/dist/css/bootstrap.min.css';

// COMPONENTS
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from "redux";
import reducers from './store/reducers'
import {errorMiddleware} from "./helpers/errors/errorMiddleware";
import {composeWithDevTools} from "redux-devtools-extension";

const composeEnhancers = composeWithDevTools({});
const store = createStore(reducers, composeEnhancers(
    applyMiddleware(errorMiddleware, thunk),
));

const App = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes/>
            </BrowserRouter>
        </Provider>
    )
}

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
)