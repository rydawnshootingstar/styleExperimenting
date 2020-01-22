import React from "react";
import { Router, Route, Switch, Link, NavLink } from "react-router-dom";
import { createBrowserHistory } from "history";
import HomePage from "../pages/HomePage";
import NeumorphicPage from '../pages/NeumorphicPage';
import MegaMenuPage from '../pages/MegaMenuPage';
import TherapyPage from '../pages/TherapyPage';
import BookAppPage from '../pages/BookAppPage';
import ErrorPage from "../pages/ErrorPage";
import GridPage from '../pages/GridPage';

export const history = createBrowserHistory();

const AppRouter = () => (
	//Router allows us to pass in our own history object instead of using Browser's
	<Router history={history}>
		<div>
			<Switch>
				{/* if something doesn't match a path in this router, it will go to ErrorPage */}
				<Route path="/home" component={HomePage} exact={true} />
				<Route path="/" component={MegaMenuPage} exact={true} />
				<Route path="/therapy" component={TherapyPage} exact={true} />
				<Route path="/gridpage" component={GridPage} exact={true} />
				<Route path="/neumorphic" component={NeumorphicPage} exact={true} />
				<Route path="/bookapp" component={BookAppPage} exact={true} />
				<Route component={ErrorPage} />
			</Switch>
		</div>
	</Router>
);

export default AppRouter;
