import {GET_LIST_PRODUCT_WATCHER, POST_PRODUCT_WATCHER} from "../../constants/actionTypes";

export default function (state = {}, action) {
    switch(action.type) {
        case POST_PRODUCT_WATCHER:
            return {...state, auth: action.payload};

        case GET_LIST_PRODUCT_WATCHER:
            console.log('%c qqqqqqqqqqqqq', 'background: orange; color: red;');
            console.log('dfd')
            return {...state, list: action.payload}

        default: return state;
    }
}