import React from "react";
import PodcastCategory from "../components/PodcastCategory";
import "../sass/views/home.scss";
import menuIcon from "../assets/icons/menu.svg";
import featuredPodcastImage from "../assets/images/codenewbie.png";

const FeaturedPod = () => {
  return (
    <section className="featured-podcast">
      <img
        src={featuredPodcastImage}
        alt="podcast channel"
        className="channel-image"
      />
      <div className="card-content">
        <div className="podcast-info">
          <p className="podcast-channel">Codenewbie</p>
          <p className="podcast-title">
            Getting Started with Machine Learning and AI
          </p>
          <div className="podcast-details">
            <p className="time-released">
              <span>2</span> days ago
            </p>
            <p className="duration">22 mins</p>
          </div>
        </div>
        <button className="play-button">play</button>
      </div>
    </section>
  );
};

const Home = (props) => {
  return (
    <div id="home">
      <section className="nav">
        <div className="nav-header">
          <a href="./" className="brand">
            Suncasts.
          </a>
          <button onClick={props.closeSidenav} className="hamburger-btn">
            <img
              src={menuIcon}
              alt="playlist and audio player"
              className="hamburger-icon"
            />
          </button>
        </div>
        <form className="nav-search">
          <div className="form-control">
            <input
              type="search"
              name="searchPodcast"
              className="searchBar"
              id="searchPodcast"
              placeholder="search ..."
              autoComplete="off"
            />
          </div>
        </form>
      </section>
      <FeaturedPod />
      <PodcastCategory />
    </div>
  );
};

export default Home;
