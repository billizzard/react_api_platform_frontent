import {combineReducers} from "redux";
import user from './user_reducer'
import error from './error_reducer'
import admin_layout from './admin_layout'

const rootReducer = combineReducers({
   user, error, admin_layout
});

export default rootReducer