import { combineReducers } from "redux";
import airlinesDataReducer from "./airlinesDataReducer";
import searchReducer from "./searchReducer";

export default combineReducers({
  airline: airlinesDataReducer,
  search: searchReducer,
});
