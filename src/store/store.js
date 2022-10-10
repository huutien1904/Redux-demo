import { createStore ,applyMiddleware } from "react-redux";
import thunk from 'redux-thunk'
import rootReducer from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";

const initialState = {};

const middleware = [thunk]


const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))

)