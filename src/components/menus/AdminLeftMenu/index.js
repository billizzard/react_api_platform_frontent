import React from 'react';
import {Link} from 'react-router-dom';
import MenuItem from './MenuItem'

const Index = (props) => {
    const showItems = (items) => {
        return items.map((item, i) => {
            return (
                <MenuItem key={i} item={item}/>
            )
        })
    }

    const showSubItems = items => {
        if (items) {
            return (
                <ul className="collapse list-unstyled" id="homeSubmenu">
                    {items.map((item, i) => {
                        return (
                            <li key={i}>
                                <Link to={item.url ? item.url : '#'}>{item.title}</Link>
                            </li>
                        )
                    })}
                </ul>
            )
        }
    }

    const showTitle = () => {
        return props.menu.title ? <p>{props.menu.title}</p> : null;
    }

    return (
        <ul className="list-unstyled components">
            {showTitle()}
            {showItems(props.menu.items)}
        </ul>
    );
};

export default Index
