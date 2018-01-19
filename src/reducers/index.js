import { combineReducers } from "redux";
import googleTokenReducer from "./googleAuthReducer";
import dogReducer from "./dogReducer";

const rootReducer = combineReducers({
  goog_auth: googleTokenReducer,
  dogs: dogReducer
});

export default rootReducer;
