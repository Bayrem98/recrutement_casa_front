import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/pages/Home";
import { Route, Routes } from "react-router-dom";
import FrancaisPage from "./components/pages/Fr";
import AnglaisPage from "./components/pages/En";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fr" element={<FrancaisPage />} />
        <Route path="/en" element={<AnglaisPage />} />
      </Routes>
    </div>
  );
}

export default App;
