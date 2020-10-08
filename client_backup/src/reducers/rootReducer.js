import {combineReducers} from 'redux';
import {userReducer} from "./userReducer";
import {statusReducer} from "./statusReducer"

export const rootReducer = combineReducers({
    user: userReducer,
    status: statusReducer,
});