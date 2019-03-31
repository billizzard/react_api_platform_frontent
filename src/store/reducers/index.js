import {combineReducers} from "redux";
import user from './userReducer'
import snackbar from './snackbarReducer'
import admin_layout from './admin_layout'
import test from './testReducer'
import page from './pageReducer'

const rootReducer = combineReducers({
   user, snackbar, admin_layout, test, page
});

export default rootReducer