import React, { Component } from "react";
import styles from "./book-app.scss";
import { faSearch, faBell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

class BookHeader extends Component {
	render() {
		return (
			<div className={styles.header}>
				<div className={styles.logoBox}>
					LR
					<div className={styles.logoText}>Librarium</div>
				</div>
				<div className={styles.list}>
					<div className={styles.item}>
						<Link to="/">Home</Link>
					</div>
					<div className={styles.item}>Library</div>
					<div className={styles.item}>My Books</div>
					<div className={styles.item}>Subscribe</div>
				</div>
				<div className={styles.headerRightMenu}>
					<div>
						<FontAwesomeIcon icon={faSearch} />
						{"|"}
						<FontAwesomeIcon icon={faBell} />
					</div>
				</div>
			</div>
		);
	}
}

export default BookHeader;
