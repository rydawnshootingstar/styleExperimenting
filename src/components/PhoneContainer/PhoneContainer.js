import React, { Component } from "react";
import styles from "./phone-container.scss";
import PhoneHeader from "../PhoneHeader/PhoneHeader";
import SongDetail from "../SongDetail/SongDetail";
import PlaybackButtons from "../PlaybackButtons/PlaybackButtons";

class PhoneContainer extends Component {
	render() {
		return (
			<div className={styles.container}>
				<div className={styles.phoneContainer}>
					<PhoneHeader backButton={true} menuButton={true} text={"Now Playing"} />
					<SongDetail
						song={{
							artist: "Ratboys",
							title: "Molly",
							art:
								"https://images.squarespace-cdn.com/content/v1/56066cf9e4b0ffbc0fe62db1/1499203279868-112HA5Q3NVXC0UN2XLW9/ke17ZwdGBToddI8pDm48kGDpvalPb1SqHoCn1hwN0Y57gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmQPoRzxSr1hzN-vPBHt7YyLLXgctAyUJRqJUUGWVDK_ZzIgvsybGcZEPqUYiXY8im/image-asset.jpeg"
						}}
					/>
					<PlaybackButtons />
				</div>
			</div>
		);
	}
}

export default PhoneContainer;
