import { combineReducers } from "redux";
import googleInfoReducer from "./googleInfoReducer";

const rootReducer = combineReducers({
	googleInfo: googleInfoReducer
});

export default rootReducer;
