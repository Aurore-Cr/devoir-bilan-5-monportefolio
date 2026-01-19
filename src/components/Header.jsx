import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useState } from "react";

function Header() {
  const [expanded, setExpanded] = useState(false);

  return (
    <header className="sticky-top text-uppercase">
      <Navbar bg="dark" variant="dark" expand="lg" expanded={expanded}>
        <Container fluid className="px-4 px-lg-5">
          <Navbar.Brand as={NavLink} to="/" onClick={() => setExpanded(false)}>
            John Doe
          </Navbar.Brand>

          <Navbar.Toggle onClick={() => setExpanded(!expanded)} />
          <Navbar.Collapse>
            <Nav className="ms-auto ">
              <Nav.Link
                as={NavLink}
                to="/"
                end
                onClick={() => setExpanded(false)}
              >
                Home
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/services"
                onClick={() => setExpanded(false)}
              >
                Services
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/portfolio"
                onClick={() => setExpanded(false)}
              >
                Portfolio
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/contact"
                onClick={() => setExpanded(false)}
              >
                Contact
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/mentions"
                onClick={() => setExpanded(false)}
              >
                Mentions légales
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
