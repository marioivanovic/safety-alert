import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import NavBar from "./components/navigation/navbar/navBar";
import Home from "./components/pages/home/home";
import AddAlert from './components/pages/addAlert/addAlert';
import Persons from "./components/pages/persons/persons"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/alert" element={<AddAlert />} />
          <Route exact path="/people" element={<Persons />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
