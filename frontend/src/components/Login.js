import React, { useState } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Tentative de login :", { username, password });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Connexion</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Nom d'utilisateur" value={username} onChange={(e) => setUsername(e.target.value)} /><br />
        <input type="password" placeholder="Mot de passe" value={password} onChange={(e) => setPassword(e.target.value)} /><br />
        <button type="submit">Se connecter</button>
      </form>
    </div>
  );
}

export default Login;
