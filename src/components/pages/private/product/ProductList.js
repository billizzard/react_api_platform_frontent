import React, {Component} from 'react';
import AdminLayoutHoc from "../../../../hoc/AdminLayoutHoc";
import {connect} from 'react-redux'

class ProductList extends Component {
    state = {
        username: '',
        password: ''
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
        return (
            <div>
                <div className="card">
                    <form className="form-horizontal" onSubmit={this.submitForm}>
                        <div className="card-body">
                            <h4 className="card-title">Products</h4>
                            <div className="form-group row">
                                <label htmlFor="fname" className="col-sm-3 text-right control-label col-form-label">First
                                    Name</label>
                                <div className="col-sm-9">
                                    <input type="text" className="form-control" id="fname" placeholder="First Name Here"/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="lname" className="col-sm-3 text-right control-label col-form-label">Last
                                    Name</label>
                                <div className="col-sm-9">
                                    <input type="text" className="form-control" id="lname" placeholder="Last Name Here"/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="lname"
                                       className="col-sm-3 text-right control-label col-form-label">Password</label>
                                <div className="col-sm-9">
                                    <input type="password" className="form-control" id="lname" placeholder="Password Here"/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="email1"
                                       className="col-sm-3 text-right control-label col-form-label">Company</label>
                                <div className="col-sm-9">
                                    <input type="text" className="form-control" id="email1" placeholder="Company Name Here"/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="cono1" className="col-sm-3 text-right control-label col-form-label">Contact
                                    No</label>
                                <div className="col-sm-9">
                                    <input type="text" className="form-control" id="cono1" placeholder="Contact No Here"/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="cono1"
                                       className="col-sm-3 text-right control-label col-form-label">Message</label>
                                <div className="col-sm-9">
                                    <textarea className="form-control"></textarea>
                                </div>
                            </div>
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
        user: state.user
    }
}

export default connect(mapStateToProps, null)(AdminLayoutHoc(ProductList))
