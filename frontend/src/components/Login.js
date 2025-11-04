import React, { useState } from "react";
import {Container, Row, Col, Form, Button} from 'react-bootstrap';

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Tentative de login :", { username, password });
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
