import React, { useState } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./views/Home/Home";
import "./sass/views/app.scss";

const App = () => {
	let [sidenavState, setSidenavState] = useState(() => "sidenav-closed");
	return (
		<div className="app">
			<Sidebar
				sidenavVisibility={sidenavState}
				closeSidenav={() => setSidenavState("sidenav-closed")}
			/>
			<main>
				<Home
					sidenavVisibility={sidenavState}
					closeSidenav={() => setSidenavState("sidenav-opened")}
				/>
			</main>
		</div>
	);
};

export default App;
