import React from "react";
import "./channelcard.scss";
import featuredPodcastImage from "../../assets/images/codenewbie.png";

const ChannelCard = () => {
	return (
		<div className="channel-card">
			<a href="./" className="channel-link">
				<img
					src={featuredPodcastImage}
					alt="channel"
					className="channel-image"
				/>
				<p className="pl channel-name">codenewbie</p>
			</a>
		</div>
	);
};

export default ChannelCard;
