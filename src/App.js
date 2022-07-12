import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./components/pages/home/home";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/home" component={Home} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
