import React, { ReactElement } from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Home from "./pages/Home";
import Ethereum from "./pages/Etherieum";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ethereum" element={<Ethereum />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
