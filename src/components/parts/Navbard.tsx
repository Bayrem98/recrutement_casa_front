import React from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";

function Navbard() {
  return (
    <div>
      <Navbar>
        <NavbarBrand href="/" style={{ color: "white" }}>
          RECRUTEMENT
          <span style={{ fontSize: 25, fontWeight: "bold" }}> CASANOVA</span>
        </NavbarBrand>
        <Nav className="me-auto" style={{ marginLeft: 600 }}>
          <NavItem>
            <NavLink href="" style={{ color: "white" }}>
              CANDIDATURE
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="" style={{ color: "white" }}>
              ANNONCES
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="" style={{ color: "white" }}>
              CONTACT
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
}

export default Navbard;
