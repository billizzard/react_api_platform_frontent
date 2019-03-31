import React, {Component} from 'react';

import AdminLeftMenu from '../../menus/AdminLeftMenu/'
import {leftAdminMenu} from '../../../constants/menus'
import {toggleSidebar} from "../../../store/actions";
import {connect} from "react-redux";

class LeftMenuSidebar extends Component {
    handleToggleSidebar = () => {
        const isOpen = this.props.admin_layout.leftSidebar ? !this.props.admin_layout.leftSidebar.isOpen : true;
        this.props.dispatch(toggleSidebar(isOpen))
    }

    render() {
        const isOpen = this.props.admin_layout.leftSidebar ? !this.props.admin_layout.leftSidebar.isOpen : true;
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
        admin_layout: state.admin_layout
    }
}

export default connect(mapStateToProps, null)(LeftMenuSidebar);
