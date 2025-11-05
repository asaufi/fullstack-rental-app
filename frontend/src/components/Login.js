import React, { useState } from "react";
import axios from "axios";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { loginUsers } from "../services/api";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await loginUsers({ username, password });

      const token = response.data.token; // backend returns { token: "..." }

      // Save token for future requests
      localStorage.setItem("token", token);
      localStorage.setItem("username", username);


      console.log("Login successful! Token saved:", token);

      // Redirect or update UI
      window.location.href = "/offers"; // example redirect

    } catch (err) {
      console.error("Login failed:", err);
      setError("Nom d'utilisateur ou mot de passe incorrect.");
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
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Mot de passe</Form.Label>
          <Form.Control
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        {error && <p style={{ color: "red" }}>{error}</p>}

        <Row>
          <Col className="d-grid">
            <Button type="submit" variant="primary">Se connecter</Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
}

export default Login;
