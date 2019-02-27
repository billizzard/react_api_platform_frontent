import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {loginUser} from "../../../actions";
import {saveAuthInfo} from "../../../helpers/storage_helper";

class MenuItem extends Component {
    state = {
        isOpen: false
    }

    showSubItems = (items, isOpen) => {
        if (items) {
            const className = "collapse list-unstyled" + (isOpen ? ' show' : '');
            return (
                <ul className={className}>
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

    handleItemClick = () => {
        this.setState({isOpen: !this.state.isOpen})
    }

    render() {
        const {key, item} = this.props;

        return (
            <li key={key}>
                <Link
                    to={item.url ? item.url : '#'}
                    className={item.items ? 'dropdown-toggle' : ''}
                    data-toggle={item.items ? 'collapse' : ''}
                    onClick={this.handleItemClick}
                >{item.title}</Link>
                {this.showSubItems(item.items, this.state.isOpen)}
            </li>
        );
    }
}

export default MenuItem
