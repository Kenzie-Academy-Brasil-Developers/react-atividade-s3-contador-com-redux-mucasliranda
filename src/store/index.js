import { legacy_createStore, combineReducers } from "redux";

import reducerCounter from "./modules/counter/reducer";

const reducers = combineReducers({ counter:reducerCounter })

const store = legacy_createStore(reducers)

export default store