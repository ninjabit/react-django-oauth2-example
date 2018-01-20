import { combineReducers } from "redux";

import googleTokenReducer from "./googleAuthReducer";
import githubAuthReducer from "./githubAuthReducer";
import dogReducer from "./dogReducer";

const rootReducer = combineReducers({
  goog_auth: googleTokenReducer,
  github_auth: githubAuthReducer,
  dogs: dogReducer
});

export default rootReducer;
