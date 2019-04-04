import {CLOSE_SNACKBAR, OPEN_SNACKBAR} from "../../constants/actionTypes";

export default function (state = {}, action) {
    switch(action.type) {
        case OPEN_SNACKBAR:
            return {...state, data: action.payload};

        case CLOSE_SNACKBAR:
            return {...state, data: action.payload};

        default: return state;
    }
}
