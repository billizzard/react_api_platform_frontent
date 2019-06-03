import {get} from "../requests/messageRequest";
import {GET_LIST_MESSAGE} from "../../constants/actionTypes";

export const getListMessage = () => async dispatch => {
    const response = await get();

    if (response) {
        dispatch({
            type: GET_LIST_MESSAGE,
            payload: response.data
        })
    }
};