import { combineReducers } from "redux";
import modeReducer from "./mode"
import firstNameReducer from "./firstName"
import lastNameReducer from "./lastName"
import zipCodeReducer from "./zipCode"

const appReducer = combineReducers({
    mode: modeReducer,
    firstName: firstNameReducer,
    lastName: lastNameReducer,
    zipCode: zipCodeReducer
  });

export default appReducer;
