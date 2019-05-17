import React, {Component} from 'react';
import {connect} from "react-redux";
import {toggleSidebar} from "../../../store/actions";
import {Link} from 'react-router-dom';
import {AdminLayoutState} from "../../../types/common/state";
import {IProps} from "../../../types/common";

class TopSidebar extends Component<IProps & AdminLayoutState> {
    handleToggleSidebar = () => {
        const isOpen = this.props.adminLayout.leftSidebar ? !this.props.adminLayout.leftSidebar.isOpen : true;
        this.props.dispatch(toggleSidebar(isOpen))
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">

                    <button type="button" id="sidebarCollapse" className="btn btn-info" onClick={this.handleToggleSidebar}>
                        <i className="fas fa-align-left"></i>
                        <span>Toggle Sidebar</span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="nav navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/security/logout">Logout</Link>
                            </li>
                        </ul>
                    </div>

                </div>
            </nav>
        );
    }
}

function mapStateToProps(state) {
    return {
        adminLayout: state.adminLayout
    }
}

export default connect(mapStateToProps, null)(TopSidebar);
