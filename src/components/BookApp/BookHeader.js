import React, { Component } from "react";
import styles from "./book-app.scss";
import { faSearch, faBell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class BookHeader extends Component {

	render() {
		return (
			<div className={styles.header}>
				<div className={styles.logoBox}>
					LR
					<div className={styles.logoText}>Librarium</div>
				</div>
				<div className={styles.list}>
					<div className={styles.item}>Home</div>
					<div className={styles.item}>Library</div>
					<div className={styles.item}>My Books</div>
					<div className={styles.item}>Subscribe</div>
				</div>

				<div className={this.props.hasNotifications ? styles['headerRightMenu--notifications'] : styles.headerRightMenu}>
                    <div>
                        <FontAwesomeIcon icon={faSearch} />
                    </div>
                </div>
			</div>
		);
	}
}

export default BookHeader;
