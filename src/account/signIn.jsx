import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import './signIn.css';
import { auth } from "../firebase/firebaseConfig"

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Acceso exitoso, muestra un mensaje
        setMessage("Inicio de sesión exitoso. ¡Bienvenido de nuevo!");
        setLoggedIn(true);
        // También puedes hacer cualquier otra acción aquí, como redirigir a otra página
        console.log(userCredential);
        window.location.href = '/';
      })
      .catch((error) => {
        // Maneja cualquier error de inicio de sesión aquí
        setMessage(`Error al iniciar sesión: ${error.message}`);
        console.log(error);
      });
  };

  return (
    <div className="parent">
      <div className="children">
        <form onSubmit={signIn}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <br/>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <br/>
          <button type="submit">Log In</button>
        </form>
        {message && <p>{message}</p>}
        {loggedIn && <p>¡Has iniciado sesión correctamente!</p>} {/* Muestra el mensaje si loggedIn es true */}
      </div>
    </div>
  );
};

export default SignIn;
