import React, {Component} from 'react';

import AdminLeftMenu from '../../menus/AdminLeftMenu/'
import {leftAdminMenu} from '../../../constants/menus'
import {toggleSidebar} from "../../../store/actions";
import {connect} from "react-redux";
import {IProps} from "../../../types/common";
import {AdminLayoutState} from "../../../types/common/state";

class LeftMenuSidebar extends Component<IProps & AdminLayoutState> {
    handleToggleSidebar = () => {
        const isOpen = this.props.adminLayout.leftSidebar ? !this.props.adminLayout.leftSidebar.isOpen : true;
        this.props.dispatch(toggleSidebar(isOpen))
    }

    render() {
        const isOpen = this.props.adminLayout.leftSidebar ? !this.props.adminLayout.leftSidebar.isOpen : true;
        return (
            <nav id="sidebar" className={isOpen ? '' : 'active'}>
                <div className="sidebar-header">
                    <h3>Bootstrap Sidebar</h3>
                    <i id='close' onClick={this.handleToggleSidebar}>close</i>
                </div>

                <AdminLeftMenu menu={leftAdminMenu}/>
            </nav>
        );
    }
}

function mapStateToProps(state) {
    return {
        adminLayout: state.adminLayout
    }
}

export default connect(mapStateToProps, null)(LeftMenuSidebar);
