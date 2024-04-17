import React from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";

function Navbard() {
  return (
    <Navbar fixed="top" color="black">
      <NavbarBrand href="/fr" style={{ color: "white" }}>
        RECRUTEMENT{" "}
        <span style={{ fontSize: 25, fontWeight: "bold" }}>ASTRAGALE</span>
      </NavbarBrand>
      <Nav className="me-auto" style={{ marginLeft: 500, fontSize: 20 }}>
        <NavItem>
          <NavLink href="#formulaire" style={{ color: "white" }}>
            CANDIDATURE
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#annonces" style={{ color: "white" }}>
            ANNONCES
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#contact" style={{ color: "white" }}>
            CONTACT
          </NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
}

export default Navbard;
