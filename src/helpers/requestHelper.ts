import {getItem} from "./storageHelper";
import axios, {AxiosPromise} from 'axios';

export function postRequest(url: string, data: any): AxiosPromise {
    return axios.post(url, data, {
        headers: { Authorization: "Bearer " + getItem('authToken') }
    });
}

