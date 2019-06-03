import {AxiosPromise} from 'axios';
import {getRequest} from "../../helpers/requestHelper";

type GetMessage = () => AxiosPromise

export const get: GetMessage = () => {
    return getRequest('/api/profile/messages');
};
