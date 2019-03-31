import {OPEN_SNACKBAR} from "../../constants/actionTypes";
import errorRequestHandler from "./errorRequestHandler";

/**
 * Just for catch errors during request and pass them to Snackbar
 * @param store
 * @returns {function(*): Function}
 */
export const errorMiddleware = store => next => async action => {
    try {
        return await next(action)
    } catch (error) {
        store.dispatch({
            type: OPEN_SNACKBAR,
            payload: errorRequestHandler(error)
        });
    }
}
