import React, { useState } from "react";
import { registerUsers } from "../services/api";
import {Container, Row, Col, Form, Button} from 'react-bootstrap';

function Register() {
  const [user, setUser] = useState({ username: "", email: "", password: "" });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    registerUsers(user)
      .then(() => alert("Utilisateur créé avec succès"))
      .catch(() => alert("Erreur lors de l'inscription"));
  };

  return (
    <Container className="py-4" style={{ maxWidth: 540 }}>
      <h2 className="mb-3">Inscription</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-2" controlId="username">
          <Form.Label>Nom d'utilisateur</Form.Label>
          <Form.Control
            name="username"
            placeholder="Nom d'utilisateur"
            value={user.username}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-2" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            name="email"
            type="email"
            placeholder="Email"
            value={user.email}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-2" controlId="role">
          <Form.Label>Rôle</Form.Label>
          <Form.Control
            name="role"
            placeholder="Rôle"
            value={user.role}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Mot de passe</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Mot de passe"
            value={user.password}
            onChange={handleChange}
          />
        </Form.Group>

        <Row>
          <Col className="d-grid">
            <Button type="submit" variant="primary">S'inscrire</Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
}

export default Register;
