import React, {Component} from 'react';
import { Route, Switch} from 'react-router-dom';

// COMPONENTS
import Header from '../components/layouts/Header'

const FrontLayoutHoc = (WrappedPage) => {
    return (props) => (
        <div>
            <Header/>
            <WrappedPage {...props}/>
        </div>
    )
}

export default FrontLayoutHoc;
