import rootReducer from "./reducers/rootReducer";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { createWrapper } from "next-redux-wrapper";


export const makeStore = () =>
  createStore(rootReducer, {}, composeWithDevTools(applyMiddleware(thunk)));

export const wrapper = createWrapper(makeStore);



// import {createStore} from 'redux';
// import {rootReducer} from './rootReducer';

// export const store = createStore(
//     rootReducer,
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// )