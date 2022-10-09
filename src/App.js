import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import NavBar from "./components/navigation/navbar/navBar";
import Home from "./components/pages/home/home";
import addAlert from "./components/pages/addAlert/addAlert";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/add-alert" element={<addAlert />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
