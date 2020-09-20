import { createStore, applyMiddleware } from "redux";
import { componentWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducers from "./reducers";

const initialState = {};

const middleware = [thunk];

const store = createStore(
  rootReducers,
  initialState,
  componentWithDevTools(applyMiddleware(...middleware))
);

export default store;
