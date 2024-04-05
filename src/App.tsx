import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/pages/Home";
import Navbard from "./components/parts/Navbard";

function App() {
  return (
    <div className="App">
      <Navbard />
      <Home />
    </div>
  );
}

export default App;
