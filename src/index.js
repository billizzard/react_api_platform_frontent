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

const createStoreWithMiddleware = applyMiddleware(errorMiddleware, thunk)(createStore)

const App = () => {
    return (
        <Provider store={createStoreWithMiddleware(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
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