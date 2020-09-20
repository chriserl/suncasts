import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import "./sass/views/app.scss";

const App = () => {
  let [sidenavState, setSidenavState] = useState(() => "sidenav-opened");
  return (
    <div className="app">
      <Sidebar
        sidenavVisibility={sidenavState}
        closeSidenav={() => setSidenavState("sidenav-closed")}
      />
      <main></main>
    </div>
  );
};

export default App;
