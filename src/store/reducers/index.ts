import {combineReducers} from "redux";
import user from './userReducer'
import snackbar from './snackbarReducer'
import adminLayout from './adminLayout'
import test from './testReducer'
import page from './pageReducer'
import {reducer as formReducer} from 'redux-form'

const rootReducer = combineReducers({
   form: formReducer,
   user, snackbar, adminLayout, test, page
});

export default rootReducer