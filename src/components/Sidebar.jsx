import React from "react";
import "../sass/components/sidebar.scss";
import playIcon from "../assets/icons/play.svg";
import forwardIcon from "../assets/icons/forwardicon.svg";
import backwardIcon from "../assets/icons/backwardicon.svg";
import closeIcon from "../assets/icons/close.svg";

const Sidebar = (props) => {
  return (
    <aside className={`sidebar ${props.sidenavVisibility}`}>
      <nav>
        <button onClick={props.closeSidenav} className="close-btn icon-btn">
          <img src={closeIcon} alt="close menu" />
        </button>
        <a href="./" className="brand">
          Suncasts.
        </a>
      </nav>
      <section className="playlist">
        <p className="section-title">Playlist</p>
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
