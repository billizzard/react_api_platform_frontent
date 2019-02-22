import axios from 'axios'
import errorRequestHandler from '../helpers/errors/error_request_handler'

export const loginUser = ({username, password}) => async dispatch => {
    await axios.post('/api/auth/login', {username, password})
        .then(response => {
            dispatch({
                type: 'USER_LOGIN',
                payload: response.data
            })
        })
        .catch(error => {
            dispatch({
                type: 'ERROR_POPUP',
                payload: errorRequestHandler(error.response.data)
            })
        });
}

export const registrationUser = ({username, password, confirm_password}) => async dispatch => {
    await axios.post('/api/auth/registration', {email: username, password, confirm_password})
        .then(response => {
            dispatch({
                type: 'USER_REGISTRATION',
                payload: response.data
            })
        })
        .catch(error => {
            dispatch({
                type: 'ERROR_POPUP',
                payload: errorRequestHandler(error.response.data)
            })
        });
}

export function auth() {
    // const request =
}
