import {post, get} from "../requests/productWatcherRequest";
import {GET_LIST_PRODUCT_WATCHER} from "../../constants/actionTypes";
// import history from 'history/createHashHistory';
import {IProductWatcher} from "../../types/models/IProductWatcher";

export const postProductWatcher = (productWatcher: IProductWatcher, history: any) => async dispatch => {
    const response = await post(productWatcher.title, productWatcher.url, productWatcher.currentPrice, +productWatcher.percent);

    if (response) {
        history.push('/room/products/')
    }
};

export const getListProductWatcher = () => async dispatch => {
    const response = await get();

    if (response) {
        dispatch({
            type: GET_LIST_PRODUCT_WATCHER,
            payload: response.data
        })
    }
};