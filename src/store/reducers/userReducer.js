import {USER_LOGIN, USER_REGISTRATION} from "../../constants/actionTypes";

export default function (state = {}, action) {
    switch(action.type) {
        case USER_LOGIN:
            return {...state, auth: action.payload}

        case USER_REGISTRATION:
            return {...state, auth: action.payload}

        default: return state;
    }
}