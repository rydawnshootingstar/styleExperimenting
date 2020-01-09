import React, { Component } from "react";
import styles from "./playback-buttons.scss";
import Button from '../Button/Button';
import { faPlayCircle, faPauseCircle, faStepBackward, faStepForward } from '@fortawesome/free-solid-svg-icons'

class PlaybackButtons extends Component {
	render() {
		return (
			<div className={styles.playbackButtonsContainer}> 
				<Button icon={faStepBackward}/>
				<Button icon={faPlayCircle}/>
				<Button icon={faStepForward}/>
			</div>
		);
	}
}

export default PlaybackButtons;