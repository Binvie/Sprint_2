import { combineReducers } from 'redux';
import {authReducer} from './AuthReducers';
import {cartReducer} from "./CartReducers";

export const rootReducers = combineReducers({
    auth: authReducer,
    cart: cartReducer,
});