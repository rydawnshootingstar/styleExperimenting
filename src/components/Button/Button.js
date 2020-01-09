import React, { Component } from "react";
import styles from "./button.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Button extends Component {
	render() {
		return (
			<div>
				<button className={this.props.large ? styles['button--large'] : styles.button}>
					{this.props.label}
                    {' '}
					{this.props.icon && <FontAwesomeIcon icon={this.props.icon} />}
				</button>
			</div>
		);
	}
}

export default Button;
