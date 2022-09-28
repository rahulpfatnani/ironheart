import React from "react";
import Sidebar from "./components/Sidebar";
// import "./App.css";

function App() {
  return (
    <div className="App" id="outer-container">
      <Sidebar pageWrapId={"page-wrap"} outerContainerId={"outer-container"} />
      <div id="page-wrap"></div>
    </div>
  );
}

export default App;
