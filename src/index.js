import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import Cookies from "js-cookie";
import { BrowserRouter, Route } from "react-router-dom";

import Home from "./Home";
import rootReducer from "./reducers";

console.log(Cookies.get("sumCookie"));

let store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(thunk, logger))
);

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<div>
				<Route exact path="/" component={Home} />
			</div>
		</BrowserRouter>
	</Provider>,
	document.getElementById("root")
);
