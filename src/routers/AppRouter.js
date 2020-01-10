import React from "react";
import { Router, Route, Switch, Link, NavLink } from "react-router-dom";
import { createBrowserHistory } from "history";
import HomePage from "../pages/HomePage";
import NeumorphicPage from '../pages/NeumorphicPage';
import MegaMenuPage from '../pages/MegaMenuPage';
import ErrorPage from "../pages/ErrorPage";

export const history = createBrowserHistory();

const AppRouter = () => (
	//Router allows us to pass in our own history object instead of using Browser's
	<Router history={history}>
		<div>
			<Switch>
				{/* if something doesn't match a path in this router, it will go to ErrorPage */}
				<Route path="/" component={HomePage} exact={true} />
				<Route path="/megamenu" component={MegaMenuPage} exact={true} />
				<Route path="/neumorphic" component={NeumorphicPage} exact={true} />
				<Route component={ErrorPage} />
			</Switch>
		</div>
	</Router>
);

export default AppRouter;
