import {GET_LIST_MESSAGE} from "../../constants/actionTypes";

export default function (state = {}, action) {
    switch(action.type) {
        case GET_LIST_MESSAGE:
            return {...state, list: action.payload}

        default: return state;
    }
}