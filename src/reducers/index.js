import { combineReducers } from "redux";
import googleInfoReducer from "./googleInfoReducer";
import dogReducer from "./dogReducer";

const rootReducer = combineReducers({
	googleInfo: googleInfoReducer,
	dogs: dogReducer
});

export default rootReducer;
