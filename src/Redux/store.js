import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducers";
function saveToLocalStorage(state) {
  const picked = (({ airline }) => ({ airline }))(state);
  const serializedState = JSON.stringify(picked);
  localStorage.setItem("state", serializedState);
}

function loadFromLocalStorage() {
  const serializedState = localStorage.getItem("state");
  if (serializedState === null) return undefined;
  return JSON.parse(serializedState);
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const presistedState = loadFromLocalStorage();
const store = createStore(
  reducer,
  presistedState,
  composeEnhancers(applyMiddleware(thunk))
);
store.subscribe(() => saveToLocalStorage(store.getState()));
export default store;
