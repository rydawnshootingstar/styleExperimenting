import React, { Component } from "react";
import styles from "./playback-buttons.scss";
import Button from '../Button/Button';
import { faBackward, faForward, faPauseCircle, faPlay} from '@fortawesome/free-solid-svg-icons'

class PlaybackButtons extends Component {
	render() {
		return (
			<div className={styles.playbackButtonsContainer}> 
				<Button large icon={faBackward}/>
				<Button large icon={faPlay}/>
				<Button large icon={faForward}/>
			</div>
		);
	}
}

export default PlaybackButtons;