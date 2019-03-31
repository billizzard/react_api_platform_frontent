import axios from 'axios'

export const loginUserRequest = ({username, password}) => {
    return axios.post('/api/auth/login', {username, password});
}

export const registrationUserRequest = ({username, password, confirm_password}) => {
    return axios.post('/api/auth/registration', {email: username, password, confirm_password});
}