import {AxiosPromise} from 'axios';
import {postRequest} from "../../helpers/requestHelper";

type PostProductWatcher = (title: string, url: string, price: number, percent: number) => AxiosPromise
type RegistrationRequest= (username: string, password: string, confirm: string) => AxiosPromise

export const post: PostProductWatcher = (title, url, price, percent) => {
    return postRequest('/api/profile/product_watchers', {title, url, startPrice: price, percent});
};

// export const registrationUserRequest: RegistrationRequest = (username, password, confirm_password) => {
//     return axios.post('/api/auth/registration', {email: username, password, confirm_password});
// };

