import React, {Component} from 'react';
import AdminLayoutHoc from "../../../../hoc/AdminLayoutHoc";
import {connect} from 'react-redux'
import StandardTable from "../../../../components/tables/StandardTable";
import {Link} from 'react-router-dom';
import {getListProductWatcher} from "../../../../store/actions/productWatcherAction";
import {IProps} from "../../../../types/common";
import {ProductFormType} from "../../../../types/common/state";
import {getListMessage} from "../../../../store/actions";

class MessageList extends Component <IProps> {
    componentWillMount(): void {
        this.props.dispatch(getListMessage());
    }

    //
    // handleInputEmail = (event) => {
    //     this.setState({username: event.target.value})
    // }
    //
    // handleInputPassword = (event) => {
    //     this.setState({password: event.target.value})
    // }
    //
    // submitForm = (e) => {
    //     e.preventDefault();
    //     this.props.dispatch(loginUser(this.state))
    // }
    //
    // componentWillReceiveProps(nextProps, nextContext) {
    //     if (nextProps.user.auth.token) {
    //         saveAuthInfo(nextProps.user.auth.token);
    //         this.props.history.push('/room');
    //     }
    // }

    render() {
        const items = [
            {id:1, title: 'Title 1', price: 25},
            {id:2, title: 'Title 2', price: 30},
            {id:3, title: 'Title 3', price: 40},
        ];

        const headers = [
            'title',
            'price'
        ]

        return (
            <div>
                <div className="card">
                    <form className="form-horizontal">
                        <div className="card-body">
                            <div className="d-flex">
                                <h4 className="card-title mr-auto">Messages</h4>
                                <Link to="/room/products/create">
                                    <button className="btn add-item-btn"><i className="fa fa-plus-square"></i></button>
                                </Link>
                            </div>
                            <StandardTable items={items} headers={headers}/>
                        </div>
                        <div className="border-top">
                            <div className="card-body">
                                <button type="button" className="btn btn-primary">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>


            // <div>
            //     <form onSubmit={this.submitForm}>
            //       <h2>Product List</h2>
            //
            //         <div className="form_element">
            //             <input
            //                 type="text"
            //                 placeholder="Enter Email"
            //                 value={this.state.username}
            //                 onChange={this.handleInputEmail}
            //             />
            //         </div>
            //
            //         <div className="form_element">
            //             <input
            //                 type="password"
            //                 placeholder="Enter Password"
            //                 value={this.state.password}
            //                 onChange={this.handleInputPassword}
            //             />
            //         </div>
            //
            //         <button type="submit">Log in</button>
            //     </form>
            // </div>
        );
    }
};

function mapStateToProps(state) {
    return {
        productWatchers: state.productWatcher.list
    }
}

export default connect(mapStateToProps, null)(AdminLayoutHoc(MessageList))
