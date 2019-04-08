import {toggleLoadingOverlay} from "../store/actions";

/**
 * Get pureAction and add Loading Overlay while action is running
 * @param pureAction
 * @returns {Function}
 */
export const loadingOverlay = pureAction => async (...args) => {
    const dispatch = args[0];
    dispatch(toggleLoadingOverlay(true));
    await pureAction(...args);
    dispatch(toggleLoadingOverlay(false));
}
