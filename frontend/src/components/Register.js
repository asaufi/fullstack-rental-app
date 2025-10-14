import React, { useState } from "react";
import { registerUsers } from "../services/api";

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
    <div style={{ padding: "20px" }}>
      <h2>Inscription</h2>
      <form onSubmit={handleSubmit}>
        <input name="username" placeholder="Nom d'utilisateur" value={user.username} onChange={handleChange} /><br />
        <input name="email" placeholder="Email" value={user.email} onChange={handleChange} /><br />
        <input name="role" placeholder="Role" value={user.role} onChange={handleChange} /><br />
        <input name="password" type="password" placeholder="Mot de passe" value={user.password} onChange={handleChange} /><br />
        <button type="submit">S'inscrire</button>
      </form>
    </div>
  );
}

export default Register;
