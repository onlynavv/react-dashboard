import React from "react";
import Sidebar from "./Sidebar";
import './index.css'
import DashboardContent from "./DashboardContent";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Sidebar />
        <DashboardContent />
      </div>
    </div>
  );
}

export default App;
