import React, { Component } from "react";
import styles from "./book-app.scss";
import { faSearch, faBell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
<<<<<<< Updated upstream
<<<<<<< HEAD
import {Link} from 'react-router-dom';

class BookHeader extends Component {
=======

class BookHeader extends Component {

>>>>>>> 355a11f... style links etc
=======
import {Link} from 'react-router-dom';

class BookHeader extends Component {
>>>>>>> Stashed changes
	render() {
		return (
			<div className={styles.header}>
				<div className={styles.logoBox}>
					LR
					<div className={styles.logoText}>Librarium</div>
				</div>
				<div className={styles.list}>
<<<<<<< Updated upstream
<<<<<<< HEAD
					<div className={styles.item}><Link to="/">Home</Link></div>
=======
					<div className={styles.item}>Home</div>
>>>>>>> 355a11f... style links etc
=======
					<div className={styles.item}><Link to="/">Home</Link></div>
>>>>>>> Stashed changes
					<div className={styles.item}>Library</div>
					<div className={styles.item}>My Books</div>
					<div className={styles.item}>Subscribe</div>
				</div>

<<<<<<< Updated upstream
<<<<<<< HEAD
=======
>>>>>>> Stashed changes
				<div className={styles.headerRightMenu}>
					<div>
						<FontAwesomeIcon icon={faSearch} />
						{"|"}
						<FontAwesomeIcon icon={faBell} />
					</div>
				</div>
<<<<<<< Updated upstream
=======
				<div className={this.props.hasNotifications ? styles['headerRightMenu--notifications'] : styles.headerRightMenu}>
                    <div>
                        <FontAwesomeIcon icon={faSearch} />
                    </div>
                </div>
>>>>>>> 355a11f... style links etc
=======
>>>>>>> Stashed changes
			</div>
		);
	}
}

export default BookHeader;
