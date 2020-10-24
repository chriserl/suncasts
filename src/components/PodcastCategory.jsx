import React from "react";
import "../sass/components/PodcastCategory.scss";
import cssPodcast from "../assets/images/csspod.png";
import options from "../assets/icons/options.svg";

let pods = [
	{
		title: "CSS Grids maracana manderin",
		channelImage: cssPodcast,
		channelName: "The CSS Podcast",
		timeReleased: "4 days ago",
		duration: "44mins",
	},
	{
		title: "Buffer Overflow",
		channelImage: cssPodcast,
		channelName: "The CSS Podcast",
		timeReleased: "4 days ago",
		duration: "44mins",
	},
	{
		title: "CSS Grids",
		channelImage: cssPodcast,
		channelName: "The CSS Podcast",
		timeReleased: "4 days ago",
		duration: "44mins",
	},
	{
		title: "CSS Grids",
		channelImage: cssPodcast,
		channelName: "The CSS Podcast",
		timeReleased: "4 days ago",
		duration: "44mins",
	},
];

const PodcastCategory = () => {
	return (
		<div className="podcast-category">
			<p className="category-title ph">This week</p>
			<ul className="podcasts">
				{pods.map((pod) => (
					<li className="podcast-item">
						<div className="podcast">
							<p className="podcast-title psb">{pod.title}</p>
							<div className="podcast-details">
								<img
									src={pod.channelImage}
									alt="podcast channel"
									className="podcast-channel-image"
								/>
								<div className="channel-details">
									<p className="channel-name psb">{pod.channelName}</p>
									<div className="episode-details">
										<div className="text">
											<p className="time-released px">{pod.timeReleased}</p>
											<p className="duration px">{pod.duration}</p>
										</div>
										<button className="play-button icon-button">
											<span class="material-icons">play_arrow</span>
										</button>
									</div>
								</div>
							</div>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
};

export default PodcastCategory;
