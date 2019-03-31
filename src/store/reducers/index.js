import {combineReducers} from "redux";
import user from './userReducer'
import error from './error_reducer'
import admin_layout from './admin_layout'
import test from './testReducer'

const rootReducer = combineReducers({
   user, error, admin_layout, test
});

export default rootReducer