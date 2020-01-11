import React, { Component } from "react";
import { Link } from "react-router-dom";
import styles from "./mega-menu.scss";

class MegaMenu extends Component {
	state = {
		menuOpen: false
	};

	openMenu = () => {
		this.setState({
			menuOpen: true
		});
	};

	closeMenu = () => {
		this.setState({
			menuOpen: false
		});
	};

	render() {
		return (
			<div className={this.state.menuOpen ? styles.backgroundDark : styles.background}>
				{this.state.menuOpen ? (
					<div>
						<header>
							<img src="assets/whiteX.svg" className={styles.menuButton} onClick={this.closeMenu}></img>
						</header>

						<ul>
							<li>
								<a href="#">home</a>
								<span>Welcome home bitch</span>
							</li>
							<li>
								<Link to="/neumorphic">Neumorphic Phone Design</Link>
								<span>Press the buttons!</span>
							</li>
							<li>
								<Link to="/therapy">Therapy card</Link>
								<span>This one just had nice colors</span>
							</li>
							<li>
								<a href="#">contact</a>
								<span>Where you can find us</span>
							</li>
						</ul>
					</div>
				) : (
					<div>
						<header>
							<Link className={styles.logo} to="/">
								Style Experiments
							</Link>
							<img src="assets/3Lines.svg" className={styles.menuButton} onClick={this.openMenu}></img>
						</header>

						<section>
							<h1>fun with css</h1>
						</section>
					</div>
				)}
			</div>
		);
	}
}

export default MegaMenu;
