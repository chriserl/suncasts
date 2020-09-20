import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Home from "./views/Home";
import "./sass/views/app.scss";

const App = () => {
  let [sidenavState, setSidenavState] = useState(() => "sidenav-closed");
  return (
    <div className="app">
      <Sidebar
        sidenavVisibility={sidenavState}
        closeSidenav={() => setSidenavState("sidenav-opened")}
      />
      <main>
        <Home />
      </main>
    </div>
  );
};

export default App;
