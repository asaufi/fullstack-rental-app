import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import OfferList from "./components/ListOffers";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  return (
    <Router>
      <nav style={{ padding: "10px", background: "#eee" }}>
        <Link to="/">Offres</Link> |{" "}
        <Link to="/login">Connexion</Link> |{" "}
        <Link to="/register">Inscription</Link>
      </nav>

      <Routes>
        <Route path="/" element={<OfferList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
