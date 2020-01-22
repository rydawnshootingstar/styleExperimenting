import React, { Component } from "react";
import styles from "./grid-boiz.scss";
import ToggleButton from "./ToggleButton";
import SideBar from "./SideBar";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";


class GridBoiz extends Component {

	state={
		sideBarOpen: false
	}

	toggleSideBar = () => {
		console.log("changing bar");
		this.setState({
			sideBarOpen: !this.state.sideBarOpen
		});
	};

	render() {
		let toggleButtonIcon = this.state.sideBarOpen ? faChevronRight : faChevronLeft;
		let sideBarClass = this.state.sideBarOpen ? styles.gridBoizSideBarOpen : styles.gridBoizSideBar;

		return (
			<div className={styles.gridBoizContainer}>
				<div className={styles.gridBoizHeader}>
					<div className={styles.gridBoizLogo}></div>
					<div className={styles.gridBoizNavlinks}></div>
					<div className={styles.gridBoizButtons}></div>
				</div>
				<div className={styles.gridBoizMain}>
				<div className={styles.gridBoizMainContent}>content is cool</div>
					<div className={sideBarClass}>
						<div className={styles.gridBoizToggleButton} onClick={this.toggleSideBar}>
							<ToggleButton icon={toggleButtonIcon} />
						</div>
						<SideBar />
					</div>

					
				</div>
			</div>
		);
	}
}

export default GridBoiz;
