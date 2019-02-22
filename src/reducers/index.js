import {combineReducers} from "redux";
import user from './user_reducer'
import error from './error_reducer'

const rootReducer = combineReducers({
   user, error
});

export default rootReducer