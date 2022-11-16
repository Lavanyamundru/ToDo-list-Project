import rootReducer from "./reducers/rootReducer";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { createWrapper } from "next-redux-wrapper";
// import Todo from "../components/Todo";

export const makeStore = () =>
  createStore(rootReducer, {}, composeWithDevTools(applyMiddleware(thunk)));

export const wrapper = createWrapper(makeStore);

// export const Store = () =>
//   createStore(Todo, {}, composeWithDevTools(applyMiddleware(thunk)));



