import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Header() {
  return (
    <header className=" text-light text-uppercase sticky-top">
      <Navbar expand="lg" className="bg-dark py-0  " data-bs-theme="dark">
        <Container fluid className="px-4 me-1 px-lg-4 ">
          <Navbar.Brand className="navbar-expand-lg text-light " href="/">
            John Doe
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarResponsive" />
          <Navbar.Collapse id="navbarResponsive">
            <Nav className="navbar-nav ms-auto">
              <Nav.Link
                className="nav-link py-0 px-0 px-lg-3 rounded text-light"
                href="/"
              >
                Home
              </Nav.Link>
              <Nav.Link
                className="nav-link py-0 px-0 px-lg-3 rounded text-light"
                href="/services"
              >
                Services
              </Nav.Link>
              <Nav.Link
                className="nav-link py-0 px-0 px-lg-3 rounded text-light"
                href="/portefolio"
              >
                Portfolio
              </Nav.Link>
              <Nav.Link
                className="nav-link py-0 px-0 px-lg-3 rounded text-light"
                href="/contact"
              >
                Contact
              </Nav.Link>
              <Nav.Link
                className="nav-link py-0 px-0 px-lg-3 rounded text-light"
                href="/mentions"
              >
                Mentions Légales
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
export default Header;
