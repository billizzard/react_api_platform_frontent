import React, {Component} from 'react';
import FrontLayoutHoc from "../../hoc/FrontLayoutHoc";
import {registrationUser} from "../../store/actions";
import {connect} from "react-redux";

class Registration extends Component {
    state = {
        username: '',
        password: '',
        confirm_password: ''
    }

    handleInputEmail = (event) => {
        this.setState({username: event.target.value})
    }

    handleInputPassword = (event) => {
        this.setState({password: event.target.value})
    }

    handleInputConfirmPassword = (event) => {
        this.setState({confirm_password: event.target.value})
    }

    submitForm = (e) => {
        e.preventDefault();
        this.props.dispatch(registrationUser(this.state))
    }

    componentWillReceiveProps(nextProps, nextContext) {
        if (nextProps.user.auth.id) {
            this.props.history.push('/security/login');
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.submitForm}>
                    <h2>Registration</h2>

                    <div className="form_element">
                        <input
                            type="text"
                            placeholder="Enter Email"
                            value={this.state.username}
                            onChange={this.handleInputEmail}
                        />
                    </div>

                    <div className="form_element">
                        <input
                            type="password"
                            placeholder="Enter Password"
                            value={this.state.password}
                            onChange={this.handleInputPassword}
                        />
                    </div>

                    <div className="form_element">
                        <input
                            type="password"
                            placeholder="Repeat Password"
                            value={this.state.confirm_password}
                            onChange={this.handleInputConfirmPassword}
                        />
                    </div>

                    <button type="submit">Log in</button>
                </form>
            </div>
        );
    }
};

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, null)(FrontLayoutHoc(Registration))
