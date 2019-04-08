import {combineReducers} from "redux";
import user from './userReducer'
import snackbar from './snackbarReducer'
import adminLayout from './adminLayout'
import test from './testReducer'
import page from './pageReducer'

const rootReducer = combineReducers({
   user, snackbar, adminLayout, test, page
});

export default rootReducer