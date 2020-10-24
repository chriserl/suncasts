import React from "react";
import PodcastCategory from "../../components/PodcastCategory";
import "./home.scss";
import ChannelCard from "../../components/ChannelCard/ChannelCard";

let cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const Home = (props) => {
	return (
		<div id="home">
			<section className="nav">
				<div className="nav-header">
					<a href="./" className="brand ph">
						Suncasts.
					</a>
					<button onClick={props.closeSidenav} className="hamburger-btn">
						<span className="material-icons large-icon">menu</span>
					</button>
				</div>
				<form className="search-form">
					<div className="form-control">
						<input
							className="search-input"
							type="search"
							placeholder="Search"
						/>
						<button type="search" className="search-button icon-button">
							<span class="material-icons">search</span>
						</button>
					</div>
				</form>
				<div className="page-title">
					<p className="h2">Explore Podcasts</p>
				</div>
			</section>

			<section className="featured-channels">
				<div className="content-slider">
					<ul className="content-list">
						{cards.map((card) => (
							<li key={card} className="channel-item">
								<ChannelCard />
							</li>
						))}
					</ul>
				</div>
			</section>
			<PodcastCategory />
		</div>
	);
};

export default Home;
