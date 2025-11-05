import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import ListOffers from "./components/ListOffers";
import Login from "./components/Login";
import Register from "./components/Register";
import { Navbar, Nav, Container } from "react-bootstrap";

function App() {
  return (
    <Router>
      {/* Navigation Bar */}
      <Navbar bg="light" expand="lg" className="mb-4">
        <Container>
          <Navbar.Brand href="/">Rental App</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={NavLink} to="/" end>
                Offres
              </Nav.Link>
              <Nav.Link as={NavLink} to="/login">
                Connexion
              </Nav.Link>
              <Nav.Link as={NavLink} to="/register">
                Inscription
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Page Content */}
      <Container>
        <Routes>
          <Route path="/" element={<ListOffers />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
