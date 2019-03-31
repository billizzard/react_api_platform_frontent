import {PAGE_TOGGLE_LOADING_OVERLAY} from "../../constants/actionTypes";

export const toggleLoadingOverlay = (isActive) => dispatch => {

    throw '3333';
    dispatch({
        type: PAGE_TOGGLE_LOADING_OVERLAY,
        payload: isActive
    })
}
