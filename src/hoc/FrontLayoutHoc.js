import React from 'react';
import {connect} from 'react-redux'

// COMPONENTS
import Header from '../components/layouts/Header'
import ErrorPopup from '../components/popups/Snackbar'
import LoadingOverlay from "../components/layouts/LoadingOverlay";

const FrontLayoutHoc = (WrappedPage) => {
    class HOC extends React.Component {
        render() {
            return (
                <div>
                    <LoadingOverlay
                        active={this.props.isPageLoading}
                    >
                        <Header/>
                        <WrappedPage {...this.props}/>
                        <ErrorPopup {...this.props}/>
                    </LoadingOverlay>
                </div>
            )
        }
    }

    function mapStateToProps(state) {
        return {
            'isPageLoading': state.page.isLoading
        }
    }

    return connect(mapStateToProps, null)(HOC);
};

export default FrontLayoutHoc;
