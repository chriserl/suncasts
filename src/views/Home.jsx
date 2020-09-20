import React from "react";
import "../sass/views/home.scss";
import channel01 from "../assets/images/mainpod01.jpg";
import channel02 from "../assets/images/mainpod02.jpg";
import channel03 from "../assets/images/mainpod03.png";
import channel04 from "../assets/images/mainpod04.jpeg";

const Home = () => {
  return (
    <div id="home">
      <section className="nav">
        <form className="nav-search">
          <div className="form-control">
            <input
              type="search"
              name="searchPodcast"
              className="searchBar"
              id="searchPodcast"
            />
          </div>
        </form>
      </section>
      <div className="intro-texts">
        <p className="main-text">
          Resounding <span>Podcasts</span>
        </p>
        <p className="aux-main">for the discerning listener</p>
      </div>
      <ul className="channels">
        <li className="channel-item">
          <a href="./" className="channel-link">
            <img src={channel01} alt="" />
          </a>
        </li>
        <li className="channel-item">
          <a href="./" className="channel-link">
            <img src={channel02} alt="" />
          </a>
        </li>
        <li className="channel-item">
          <a href="./" className="channel-link">
            <img src={channel03} alt="" />
          </a>
        </li>
        <li className="channel-item">
          <a href="./" className="channel-link">
            <img src={channel04} alt="" />
          </a>
        </li>
        <li className="channel-item link-item">
          <a href="./" className="browse-link">
            browse channels
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Home;
