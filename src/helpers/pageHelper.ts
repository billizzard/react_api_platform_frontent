import {toggleLoadingOverlay} from "../store/actions";
import {openSnackbar} from "../store/actions/snackbarAction";
import {IReduxForm, ReduxFromType} from "../types/common/state";
import {getErrorPayload} from "./snackbarHelper";
import {Dispatch} from "react";

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

// export const showFormError = (dispatch: Dispatch<any>, reduxForm: ReduxFromType) => {
//     console.log('%c SHOW FORM ERROS', 'background: orange; color: red;');
//     console.log(reduxForm)
//         for (const key in reduxForm) {
//             console.log('%c KEY', 'background: orange; color: red;');
//             console.log(key)
//             console.log(reduxForm[key])
//             if (reduxForm[key].anyTouched) {
//                 for (const errorKey in reduxForm[key].syncErrors) {
//                     dispatch(openErrorSnackbar(reduxForm[key].syncErrors[errorKey]))
//                     break;
//                 }
//             }
//             // this.props.dispatch(openSnackbar('warning', formData.syncErrors[key]));
//             break;
//         }
// }
