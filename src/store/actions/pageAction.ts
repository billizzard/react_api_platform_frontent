import {PAGE_TOGGLE_LOADING_OVERLAY} from "../../constants/actionTypes";

export const toggleLoadingOverlay = (isActive: boolean) => dispatch => {
    dispatch({
        type: PAGE_TOGGLE_LOADING_OVERLAY,
        payload: isActive
    })
}
