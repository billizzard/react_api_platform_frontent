import React from 'react';

// COMPONENTS
import LeftMenuSidebar from '../components/layouts/admin/LeftMenuSidebar'
import TopSidebar from '../components/layouts/admin/TopSidebar'

const AdminLayoutHoc = (WrappedPage) => {
    return (props) => (

        <div className="wrapper">

            <LeftMenuSidebar/>

            <div id="content">
                <TopSidebar/>
                <div id="page-content">
                    <WrappedPage {...props}/>
                </div>
            </div>

        </div>
    )
}

export default AdminLayoutHoc;
