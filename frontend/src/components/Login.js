import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { loginUsers } from "../services/api";
import { jwtDecode } from "jwt-decode";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ✅ Define the credentials before using them
    const credentials = {
      username,
      password,
    };

    try {
      const response = await loginUsers(credentials); // <-- using your api.js helper
      const token = response.data.token;

      // ✅ Save token
      localStorage.setItem("token", token);

      // ✅ Decode the JWT to extract the role and username
      const decoded = jwtDecode(token);
      const userRole = decoded.roles; // matches your JwtUtil claim
      const usernameFromToken = decoded.sub; // "sub" = subject (the username)

      // ✅ Save data in localStorage
      localStorage.setItem("role", userRole);
      localStorage.setItem("username", usernameFromToken);

      alert(`Bienvenue ${usernameFromToken} (${userRole})`);
      window.location.href = "/"; // redirect to offers page
    } catch (error) {
      console.error("Login failed:", error);
      alert("Erreur de connexion !");
    }
  };

  return (
    <Container className="py-4" style={{ maxWidth: 400 }}>
      <h2 className="mb-3">Connexion</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="username">
          <Form.Label>Nom d'utilisateur</Form.Label>
          <Form.Control
            type="text"
            placeholder="Nom d'utilisateur"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Mot de passe</Form.Label>
          <Form.Control
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Form.Group>

        <Row>
          <Col className="d-grid">
            <Button type="submit" variant="primary">
              Se connecter
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
}

export default Login;
