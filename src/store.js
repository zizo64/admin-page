import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import {userReducer,checkReducer,pinuserReducer
  } from "./reducer";
const reducers = combineReducers({
     user: userReducer,
     check:checkReducer,
     pinuser:pinuserReducer 
});
const middleware = [thunk];

const initialState = {

};
const store = createStore(
  reducers,
  initialState,
  applyMiddleware(...middleware)
);

export default store;
