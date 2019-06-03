import {AxiosPromise} from 'axios';
import {postRequest, getRequest} from "../../helpers/requestHelper";

type PostProductWatcher = (title: string, url: string, price: number, percent: number) => AxiosPromise
type GetProductWatcher = () => AxiosPromise

export const post: PostProductWatcher = (title, url, price, percent) => {
    return postRequest('/api/profile/product_watchers', {title, url, startPrice: price, percent});
};

export const get: GetProductWatcher = () => {
    return getRequest('/api/profile/product_watchers.json');
};
