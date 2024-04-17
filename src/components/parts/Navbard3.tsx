import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";

function Navbard3() {
  return (
    <Navbar fixed="top" color="black">
      <NavbarBrand href="/dashboard" style={{ color: "white" }}>
        DASHBOARD{" "}
        <span style={{ fontSize: 25, fontWeight: "bold" }}>ADMINISTRATEUR</span>
      </NavbarBrand>
    </Navbar>
  );
}

export default Navbard3;
