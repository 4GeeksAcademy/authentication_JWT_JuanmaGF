import React, { useState } from "react";
import { signUp } from "./flux"; // Importa la función signUp del archivo flux.js
const SignUpView = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await signUp(email, password);
      console.log('Token:', data.token); // Aquí obtienes el token JWT del backend
      // Puedes redirigir a otra página o realizar otras acciones después del registro
    } catch (error) {
      // Maneja el error aquí
      console.error("Error en el registro:", error);
    }
  };
  return (
    <div>
      <h2>Registro</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
};
export default SignUpView;