import {post} from "../requests/productWatcherRequest";
import {POST_PRODUCT_WATCHER} from "../../constants/actionTypes";
import history from 'history/createHashHistory';

export const postProductWatcher = (productWatcher, history) => async dispatch => {
    const response = await post(title, url, currentPrice, +percent);

    if (response) {
        history.push('/room/products/')
        // dispatch({
        //     type: POST_PRODUCT_WATCHER,
        //     payload: response.data
        // })
    }
};