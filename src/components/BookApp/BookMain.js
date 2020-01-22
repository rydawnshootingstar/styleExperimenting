import React, { Component } from "react";
import SideBar from "./SideBar";
import ToggleButton from "./ToggleButton";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import styles from "./book-app.scss";

class BookMain extends Component {
	state = {};

	render() {
		const { toggleSideBar, sideBarOpen } = this.props;
		let sideBarClass = sideBarOpen ? styles.sidebarContainerOpen : styles.sidebarContainer;
		let mainContainerClass = sideBarOpen ? styles.mainContainerOpen : styles.mainContainer;
		let toggleButtonIcon = sideBarOpen ? faChevronRight : faChevronLeft;
		return (
			<div className={mainContainerClass}>
				<div className={styles.mainContent}>content is cool</div>
				<div className={sideBarClass}>
					<div className={styles.toggleButton} onClick={toggleSideBar}>
						<ToggleButton icon={toggleButtonIcon} />
					</div>
					<SideBar />
				</div>
			</div>
		);
	}
}

export default BookMain;
