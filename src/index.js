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
import Navbar from "./containers/NavbarContainer";
import DogList from "./containers/DogListContainer";

console.log(Cookies.get("sumCookie"));

let store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(thunk, logger))
);

if (Cookies.get("auth_token")) {
	store.dispatch({ type: "AUTHENTICATE_ACTION" });
}

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<div>
				<Navbar />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/secret" component={DogList} />
				</Switch>
			</div>
		</BrowserRouter>
	</Provider>,
	document.getElementById("root")
);
