import {CLOSE_SNACKBAR, OPEN_SNACKBAR} from "../../constants/actionTypes";

export const openSnackbar = (type, message) => dispatch => {
    dispatch({
        type: OPEN_SNACKBAR,
        payload: {
            type,
            message,
        }
    })
};

// export const openErrorSnackbar = (message) => dispatch => {
//     openSnackbar('error', message)(dispatch);
// };

export const closeSnackbar = () => dispatch => {
    dispatch({
        type: CLOSE_SNACKBAR,
        payload: null,
    })
};
