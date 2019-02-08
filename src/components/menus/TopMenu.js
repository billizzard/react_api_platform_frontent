import React from 'react';
import { NavLink } from 'react-router-dom';

const TopMenu = (props) => {

    const showItems = () => {
        return props.items.map((item, i) => {
            return (
                <li key={i} className="nav-item">
                    <NavLink className="nav-link" exact to={item.url} activeClassName='active'>{item.title}</NavLink>
                </li>
            )
        })
    }

    return (
        <ul className="navbar-nav mr-auto">
            {showItems()}
        </ul>
    );
};

export default TopMenu
