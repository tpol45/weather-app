import { combineReducers } from "redux";
import modeReducer from "./mode"
import firstNameReducer from "./firstName"
import lastNameReducer from "./lastName"
import weatherReducer from "./weatherInfo"
import cityInfoReducer from "./cityInfo";

const appReducer = combineReducers({
    mode: modeReducer,
    firstName: firstNameReducer,
    lastName: lastNameReducer,
    weather: weatherReducer,
    cityInfo: cityInfoReducer
  });

export default appReducer;
