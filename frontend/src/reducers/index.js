import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import googleTokenReducer from "./googleAuthReducer";
import githubAuthReducer from "./githubAuthReducer";
import dogReducer from "./dogReducer";

const rootReducer = combineReducers({
  router: routerReducer,
  goog_auth: googleTokenReducer,
  github_auth: githubAuthReducer,
  dogs: dogReducer
});

export default rootReducer;
