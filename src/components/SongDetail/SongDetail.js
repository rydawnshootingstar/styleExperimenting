import React, { Component } from "react";
import styles from "./song-detail.scss";

class SongDetail extends Component {
	render() {
		return (
			<div className={styles.songDetailContainer}>
				<div className={styles.boxShadow}>
					<div className={styles.outline}>
						<div className={styles.art}>
							<img height={"300px"} width={"300px"} src={this.props.song.art} />
						</div>
					</div>
				</div>
				<span>
					<div className={styles.songTitle}>{this.props.song.title}</div>
					<div className={styles.artistName}>{this.props.song.artist}</div>
				</span>
				<div className={styles.progressBar}>
					<span className={styles.fill}></span>
				</div>
			</div>
		);
	}
}

export default SongDetail;
