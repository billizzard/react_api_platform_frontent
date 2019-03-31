import errorRequestHandler from "./errors/error_request_handler";

export default async function requestHelper (dispatch, request) {
    try {
        return await request();
    } catch (error) {
        dispatch({
            type: 'ERROR_POPUP',
            payload: errorRequestHandler(error.response.data)
        });

        return null;
    }
}