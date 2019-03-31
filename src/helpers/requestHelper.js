import errorRequestHandler from "./errors/error_request_handler";
import {OPEN_SNACKBAR} from "../constants/actionTypes";

/**
 * Just for catch errors during request and pass them to Snackbar
 * @param dispatch
 * @param request
 * @returns {Promise<*>}
 */
export default async function requestHelper (dispatch, request) {
    try {
        return await request();
    } catch (error) {
        dispatch({
            type: OPEN_SNACKBAR,
            payload: errorRequestHandler(error.response.data)
        });

        return null;
    }
}