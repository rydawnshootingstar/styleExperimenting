import React, { Component } from "react";
import { Link } from "react-router-dom";
import styles from "./therapy.scss";

class Therapy extends Component {
	render() {
		return (
			<div className={styles.therapyPage}>
				<div className={styles.therapyContainer}>
					<div className={styles.therapyLeft}>
						<div className={styles.therapyList}>
							<div className={styles.therapyListItem}>
								<a href="#">❍❍</a>
							</div>
							<div className={styles.therapyListItem}>
								<Link data-tool-tip={"homepage"} to="/">
									HOME
								</Link>
							</div>
							<div className={styles.therapyListItem}>
								<a href="#">ABOUT</a>
							</div>
							<div className={styles.therapyListItem}>
								<a href="#">HELP</a>
							</div>
						</div>

						<div className={styles.therapyTagline}>Finding yourself with therapy</div>

						<div className={styles.therapyBlurb}>
							is often easier said than done.
							<br />
							We are here to help you through it.
						</div>

						<div className={styles.therapyButton}>GET HELP</div>
					</div>
					<div className={styles.therapyRight}>
						<div className={styles.pinkSection}></div>
					</div>
				</div>
			</div>
		);
	}
}

export default Therapy;
