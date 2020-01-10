import React, { Component } from "react";
import styles from "./mega-menu.scss";

class MegaMenu extends Component {
	state = {
		menuOpen: false
	};

	openMenu = () => {
		console.log("open menu");
		this.setState({
			menuOpen: true
		});
	};

	closeMenu = () => {
		console.log("close menu");
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
								<a href="#">about us</a>
								<span>Who we are</span>
							</li>
							<li>
								<a href="#">services</a>
								<span>What we do</span>
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
							<a href="#" className={styles.logo}>
								My Site
							</a>
							<img src="assets/3Lines.svg" className={styles.menuButton} onClick={this.openMenu}></img>
						</header>

						<section>
							<h1>this is some fancy shit</h1>
						</section>
					</div>
				)}
			</div>
		);
	}
}

export default MegaMenu;
