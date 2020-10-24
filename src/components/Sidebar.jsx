import React from "react";
import "../sass/components/sidebar.scss";

const Sidebar = (props) => {
	return (
		<aside className={`sidebar ${props.sidenavVisibility}`}>
			<nav>
				<a href="./" className="brand ph">
					Suncasts.
				</a>
				<button onClick={props.closeSidenav} className="close-btn icon-btn">
					<span className="las la-times ph small-icon"></span>
				</button>
			</nav>
			<div id="account-prompt">
				<span className="las la-user user-avatar"></span>
				<div className="login-text">
					<p className="login-prompt ps">You're not logged in</p>
					<p className="login-aux px">Sign in to get personalized content</p>
				</div>
			</div>
		</aside>
	);
};

export default Sidebar;
