import React, {Component} from 'react';
import FrontLayoutHoc from "../../hoc/FrontLayoutHoc";
import {connect} from 'react-redux'
import {loginUser} from '../../store/actions'
import {saveAuthInfo} from "../../helpers/storage_helper";

class Login extends Component {
    state = {
        username: '',
        password: ''
    }

    handleInputEmail = (event) => {
        this.setState({username: event.target.value})
    }

    handleInputPassword = (event) => {
        this.setState({password: event.target.value})
    }

    submitForm = (e) => {
        e.preventDefault();
        this.props.dispatch(loginUser(this.state))
    }

    componentWillReceiveProps(nextProps, nextContext) {
        if (nextProps.user.auth.token) {
            saveAuthInfo(nextProps.user.auth.token);
            this.props.history.push('/room');
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.submitForm}>
                  <h2>Log in here</h2>

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

export default connect(mapStateToProps, null)(FrontLayoutHoc(Login))
