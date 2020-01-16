import React, { Component } from "react";
import styles from "./phone-header.scss";
import { faArrowLeft, faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Button from "../Button/Button";

class PhoneHeader extends Component {
	render() {
		return (
			<div className={styles.phoneHeaderContainer}>
				<div>
					{this.props.backButton && (
						<Link to="/">
							<Button icon={faArrowLeft} />
						</Link>
					)}
				</div>
				<div className={styles.phoneHeaderText}>{this.props.text}</div>
				<div>{this.props.menuButton && <Button icon={faBars} />}</div>
			</div>
		);
	}
}

export default PhoneHeader;
