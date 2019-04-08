import axios, {AxiosPromise} from 'axios';

type LoginRequest = (username: string, password: string) => AxiosPromise
type RegistrationRequest= (username: string, password: string, confirm: string) => AxiosPromise

export const loginUserRequest: LoginRequest = (username, password) => {
    return axios.post('/api/auth/login', {username, password});
};

export const registrationUserRequest: RegistrationRequest = (username, password, confirm_password) => {
    return axios.post('/api/auth/registration', {email: username, password, confirm_password});
};