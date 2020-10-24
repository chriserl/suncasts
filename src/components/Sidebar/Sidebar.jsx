import React from "react";
import "./sidebar.scss";

const Sidebar = (props) => {
	return (
		<aside className={`sidebar ${props.sidenavVisibility}`}>
			<nav>
				<a href="./" className="brand ph">
					Suncasts.
				</a>
				<button onClick={props.closeSidenav} className="close-btn icon-btn">
					<span className="material-icons  large-icon">close</span>
				</button>
			</nav>
			<div id="account-prompt">
				<span className="material-icons user-avatar">account_circle</span>
				<div className="login-text">
					<p className="login-prompt ps">You're not logged in</p>
					<p className="login-aux px">Sign in to get personalized content</p>
				</div>
			</div>
		</aside>
	);
};

export default Sidebar;
