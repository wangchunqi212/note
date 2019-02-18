import {createStore,applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {combineReducers} from "redux-immutable";
import HomeReducer from "./reducers/homeReducer";


const reducers = combineReducers({
    HomeReducer
})

const store = createStore(reducers,applyMiddleware(thunk));

export default store;