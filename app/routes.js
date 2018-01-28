import React from "react";
//imported the react-router

import { Switch, Route } from "react-router-dom";

import Home from "./components/Home";

/*
	this is where your routes are setup
	they are imported into the app.js file
*/

export default (
	<Switch>
		<Route exact path="/" component={Home} />
	</Swithc>
);