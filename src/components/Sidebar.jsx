import React from "react";
import playIcon from "../assets/icons/play.svg";
import forwardIcon from "../assets/icons/forwardicon.svg";
import backwardIcon from "../assets/icons/backwardicon.svg";

const Sidebar = () => {
  return (
    <aside>
      <nav>
        <a href="./" className="brand">
          Suncasts.
        </a>
      </nav>
      <section className="playlist">
        <h5 className="section-title">Playlist</h5>
        <ul className="playlist-items">
          <li className="playlist-item">
            <p>Select any episode to play</p>
          </li>
        </ul>
      </section>
      <section className="player-area">
        <div className="podcast-player">
          <p className="episode-name">Inheritance in CSS</p>
          <p className="channel-name">The CSS Podcast</p>
          <p className="time-remaining">28mins left</p>
          <hr />
          <audio src="./"></audio>
          <div className="audio-controls">
            <button className="backward-btn">
              <img
                src={forwardIcon}
                className="control-icon backward"
                alt="backward"
              />
            </button>
            <button className="play-btn">
              <img
                src={playIcon}
                className="control-icon play-icon"
                alt="play"
              />
            </button>
            <button className="forward-btn">
              <img
                src={backwardIcon}
                className="control-icon forward"
                alt="forward"
              />
            </button>
          </div>
        </div>
      </section>
    </aside>
  );
};

export default Sidebar;
