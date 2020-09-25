import React from "react";
import "../sass/components/PodcastCategory.scss";
import cssPodcast from "../assets/images/csspod.png";
import options from "../assets/icons/options.svg";

let pods = [
  {
    title: "CSS Grids",
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
      <p className="category-title">This week</p>
      <ul className="podcasts">
        {pods.map((pod) => (
          <li className="podcast-item">
            <div className="podcast">
              <p className="podcast-title">{pod.title}</p>
              <div className="podcast-details">
                <img
                  src={pod.channelImage}
                  alt="podcast channel"
                  className="podcast-channel-image"
                />
                <div className="channel-details">
                  <p className="channel-name">{pod.channelName}</p>
                  <div className="episode-details">
                    <div className="text">
                      <p className="time-released">{pod.timeReleased}</p>
                      <p className="duration">{pod.duration}</p>
                    </div>
                    <img src={options} alt="options" className="options-icon" />
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
