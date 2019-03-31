import React from 'react';

// COMPONENTS
import Header from '../components/layouts/Header'
import ErrorPopup from '../components/popups/ErrorPopup'
import LoadingOverlay from "../components/layouts/LoadingOverlay";

const FrontLayoutHoc = (WrappedPage) => {
    return (props) => (

        <div>
            <LoadingOverlay
                text="Loading11 ..."
            >
            <Header/>
            <WrappedPage {...props}/>
            <ErrorPopup {...props}/>
            </LoadingOverlay>
        </div>
    )
}

export default FrontLayoutHoc;
