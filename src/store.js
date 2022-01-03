import { combineReducers, createStore } from "redux";
import { boardReducer } from "./reducers";

const reducer = combineReducers({
  boards: boardReducer,
});

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() //for using redux dev tools
);

export default store;
