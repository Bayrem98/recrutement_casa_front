import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/pages/Home";
import { Route, Routes } from "react-router-dom";
import FrancaisPage from "./components/pages/Fr";
import AnglaisPage from "./components/pages/En";
import AdminsTable from "./components/AdminDashboard/admin/AdminTable";
import DashboardAdmin from "./components/pages/DashboardAdmin";
import CandidatAccepte from "./components/pages/CandidatAccepte";
import AgendaRdv from "./components/pages/AgendaRdv";
import Login from "./components/pages/Login";
import Cookies from "js-cookie";
import Profil from "./components/pages/Profil";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fr" element={<FrancaisPage />} />
        <Route path="/en" element={<AnglaisPage />} />
        <Route path="/login" element={<Login />} />
      </Routes>

      {Cookies.get("access_token") && (
        <>
          <Routes>
            <Route path="/tablea" element={<AdminsTable />} />
            <Route path="/dashboard" element={<DashboardAdmin />} />
            <Route
              path="/candidataccepte/:status"
              element={<CandidatAccepte />}
            />
            {/** <Route path="/agendardv" element={<AgendaRdv />} /> */}
            <Route path="/profil" element={<Profil />} />
          </Routes>
        </>
      )}
    </div>
  );
}

export default App;
