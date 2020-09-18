import React from "react";
import Sidebar from "./components/Sidebar";
import "./sass/views/app.scss";

const App = () => {
  return (
    <div className="app">
      <Sidebar />
      <main></main>
    </div>
  );
};

export default App;
