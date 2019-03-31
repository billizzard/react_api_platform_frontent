import {PAGE_TOGGLE_LOADING_OVERLAY} from "../../constants/actionTypes";

export default function (state = {}, action) {
    switch(action.type) {
        case PAGE_TOGGLE_LOADING_OVERLAY:
            return {...state, isLoading: action.payload}

        default: return state;
    }
}