import React from 'react';

// COMPONENTS
import Header from '../components/layouts/Header'
import ErrorPopup from '../components/popups/ErrorPopup'
import { Link } from 'react-router-dom';

const AdminLayoutHoc = (WrappedPage) => {
    return (props) => (

        <div className="wrapper">

            <nav id="sidebar">
                <nav id="sidebar">
                    <div className="sidebar-header">
                        <h3>Bootstrap Sidebar</h3>
                    </div>

                    <ul className="list-unstyled components">
                        <p>Dummy Heading</p>
                        <li className="active">
                            <Link to="#homeSubmenu" data-toggle="collapse" aria-expanded="false"
                               className="dropdown-toggle">Home</Link>
                            <ul className="collapse list-unstyled" id="homeSubmenu">
                                <li>
                                    <Link to="#">Home 1</Link>
                                </li>
                                <li>
                                    <Link to="#">Home 2</Link>
                                </li>
                                <li>
                                    <Link to="#">Home 3</Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link to="#">About</Link>
                        </li>
                        <li>
                            <Link to="#pageSubmenu" data-toggle="collapse" aria-expanded="false"
                               className="dropdown-toggle">Pages</Link>
                            <ul className="collapse list-unstyled" id="pageSubmenu">
                                <li>
                                    <Link to="#">Page 1</Link>
                                </li>
                                <li>
                                    <Link to="#">Page 2</Link>
                                </li>
                                <li>
                                    <Link to="#">Page 3</Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link to="#">Portfolio</Link>
                        </li>
                        <li>
                            <Link to="#">ContLinkct</Link>
                        </li>
                    </ul>
                </nav>
            </nav>

            <div id="content">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <div className="container-fluid">

                            <button type="button" id="sidebarCollapse" className="btn btn-info">
                                <i className="fas fa-align-left"></i>
                                <span>Toggle Sidebar</span>
                            </button>

                        </div>
                    </nav>
                <WrappedPage {...props}/>
            </div>

        </div>
    )
}

export default AdminLayoutHoc;
