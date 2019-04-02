import React from 'react';
import {connect} from 'react-redux'

// COMPONENTS
import Header from '../components/layouts/Header'
import Snackbar from '../components/popups/snackbar/GlobalSnackbar'
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
                        <Snackbar />
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
