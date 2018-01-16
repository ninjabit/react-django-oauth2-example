import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import Cookies from "js-cookie";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./Home";
import rootReducer from "./reducers";
import Navbar from "./components/Navbar";

import GoogleButtons from "./components/Gbtns";
import GoogleLogoutButton from "./containers/GoogleLogoutButtonContainer";
console.log(Cookies.get("sumCookie"));

let store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(thunk, logger))
);

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<div>
				<Navbar />
				<Switch>
					<Route component={GoogleLogoutButton} />
					<Route exact path="/" component={Home} />
				</Switch>
			</div>
		</BrowserRouter>
	</Provider>,
	document.getElementById("root")
);
