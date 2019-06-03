import {getItem} from "./storageHelper";
import axios, {AxiosPromise} from 'axios';

export function postRequest(url: string, data: any): AxiosPromise {
    return axios.post(url, data, {
        headers: { Authorization: "Bearer " + getItem('authToken') }
    });
}

export function getRequest(url: string): AxiosPromise {
    return axios.get(url, {
        headers: { Authorization: "Bearer " + getItem('authToken') }
    });
}

/** Headers for a pagination */
export const jsonldHeaders = {
    'Accept': 'application/ld+json',
};
export const jsonHeaders = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
};