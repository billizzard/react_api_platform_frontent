import {TEST_ACTION, TEST_ACTION_1} from "../../constants/actionTypes";

export default function (state = {}, action) {
    switch(action.type) {
        case TEST_ACTION:
            return {...state, testActionReducerPayload: action.payload}
            case TEST_ACTION_1:
            return {...state, testActionReducer111Payload: action.payload}

        default: return state;
    }
}