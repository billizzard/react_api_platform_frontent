import {loginUserRequest, registrationUserRequest} from "../requests/userRequest";
import requestHelper from "../../helpers/requestHelper";
import {USER_LOGIN, USER_REGISTRATION} from "../../constants/actionTypes";

export const loginUser = ({username, password}) => async dispatch => {
    const response = await requestHelper(dispatch, () => loginUserRequest({username, password}))

    if (response) {
        dispatch({
            type: USER_LOGIN,
            payload: response.data
        })
    }
}

export const registrationUser = ({username, password, confirm_password}) => async dispatch => {
    const response = await requestHelper(dispatch, () => registrationUserRequest({
        username,
        password,
        confirm_password
    }));

    if (response) {
        dispatch({
            type: USER_REGISTRATION,
            payload: response.data
        })
    }
}