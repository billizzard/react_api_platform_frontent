import {POST_PRODUCT_WATCHER} from "../../constants/actionTypes";

export default function (state = {}, action) {
    switch(action.type) {
        case POST_PRODUCT_WATCHER:
            return {...state, auth: action.payload};

        default: return state;
    }
}