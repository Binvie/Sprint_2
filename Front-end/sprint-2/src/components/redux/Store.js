import {applyMiddleware, createStore} from "redux";
import {rootReducers} from "./reducer/RootReducers";
import {thunk} from "redux-thunk";


const middleware = [thunk]
const store = createStore(rootReducers,{}, applyMiddleware(...middleware));
export default store;