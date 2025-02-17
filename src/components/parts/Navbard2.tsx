import React from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";

function Navbard2() {
  return (
    <Navbar fixed="top" color="black">
      <NavbarBrand href="/en" style={{ color: "white" }}>
        RECRUTEMENT <span className="nav-astra-page">ULYSSE</span>
      </NavbarBrand>
      <Nav className="nav-astra-menu me-auto">
        <NavItem>
          <NavLink href="#formulaire" style={{ color: "white" }}>
            APPLICATION
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#annonces" style={{ color: "white" }}>
            JOB OFFER
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

export default Navbard2;
