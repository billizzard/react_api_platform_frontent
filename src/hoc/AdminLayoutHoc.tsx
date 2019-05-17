import React from 'react';
import {connect} from 'react-redux'

// COMPONENTS
import Snackbar from '../components/popups/snackbar/GlobalSnackbar'
import LoadingOverlay from "../components/layouts/LoadingOverlay";
import LeftMenuSidebar from "../components/layouts/admin/LeftMenuSidebar";
import TopSidebar from "../components/layouts/admin/TopSidebar";

type HOCProps = {
    isPageLoading: boolean,
}

const AdminLayoutHoc = (WrappedPage) => {
    class HOC extends React.Component<HOCProps> {
        render() {
            return (
                <LoadingOverlay
                    active={this.props.isPageLoading}
                >
                    <div className="wrapper">
                        <LeftMenuSidebar/>

                        <div id="content">
                            <TopSidebar/>
                            <div id="page-content">
                                <WrappedPage {...this.props}/>
                            </div>
                            <Snackbar />
                        </div>
                    </div>
                </LoadingOverlay>
            )
        }
    }

    function mapStateToProps(state) {
        return {
            'isPageLoading': state.page.isLoading,
        }
    }

    return connect(mapStateToProps, null)(HOC);
}

export default AdminLayoutHoc;
