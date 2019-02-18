import {createStore,applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {combineReducers} from "redux-immutable";
import a from "./reducers/a";
import b from "./reducers/b";


const reducers = combineReducers({
    a,
    b
})

const store = createStore(reducers,applyMiddleware(thunk));

export default store;