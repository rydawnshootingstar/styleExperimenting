import React, { Component } from "react";
import { Link } from "react-router-dom";

import Button from "../components/Button/Button";
import FancyButton from "../components/FancyButton/FancyButton";

import { faCoffee } from '@fortawesome/free-solid-svg-icons'

class HomePage extends Component {
	render() {
		return (
			<div>
				Home
				<Button icon={faCoffee} />
				<Button large={true} icon={faCoffee} />
				<FancyButton label="Fancy" />
				<Link to="/neumorphic">Neumorphic</Link>
				<Link to="/megamenu">Mega Menu</Link>
				<Link to="/nonExistantPage">Custom 404 Page</Link>
			</div>
		);
	}
}

export default HomePage;
