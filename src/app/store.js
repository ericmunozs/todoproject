import { createStore } from "redux";
import rootReducer from "../reducers";

// Get redux state in Browser (if any)
const persistedState = localStorage.getItem("reduxState")
  ? JSON.parse(localStorage.getItem("reduxState"))
  : {};

export const store = createStore(
  rootReducer,
  persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// Save redux state in Browser
store.subscribe(() => {
  localStorage.setItem("reduxState", JSON.stringify(store.getState()));
});
