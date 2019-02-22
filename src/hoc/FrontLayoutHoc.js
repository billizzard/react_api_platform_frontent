import React from 'react';

// COMPONENTS
import Header from '../components/layouts/Header'
import ErrorPopup from '../components/popups/ErrorPopup'

const FrontLayoutHoc = (WrappedPage) => {
    return (props) => (

        <div>
            <Header/>
            <WrappedPage {...props}/>
            <ErrorPopup {...props}/>
        </div>
    )
}

export default FrontLayoutHoc;
