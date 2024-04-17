import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/pages/Home";
import { Route, Routes } from "react-router-dom";
import FrancaisPage from "./components/pages/Fr";
import AnglaisPage from "./components/pages/En";
import UsersTable from "./components/AdminDashboard/users/UsersTable";
import AdminsTable from "./components/AdminDashboard/admin/AdminTable";
import DashboardAdmin from "./components/pages/DashboardAdmin";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fr" element={<FrancaisPage />} />
        <Route path="/en" element={<AnglaisPage />} />
        <Route path="/table" element={<UsersTable />} />
        <Route path="/tablea" element={<AdminsTable />} />
        <Route path="/dashboard" element={<DashboardAdmin />} />
      </Routes>
    </div>
  );
}

export default App;
