import { combineReducers } from "redux";
import modeReducer from "./mode"

const appReducer = combineReducers({
    mode: modeReducer,
  });

export default appReducer;
