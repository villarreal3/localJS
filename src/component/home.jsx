import React, { useContext } from 'react';
import { AuthContext } from './../account/AuthProvider';
import { Navigate } from 'react-router-dom';
import {useRedirectOnAuthChange} from '../account/useRedirectOnAuthChange';

function Main() {
  return (
    <>
      New App
    </>
  );
}

function Home() {
  const { user, loading } = useContext(AuthContext);
  const redirect = useRedirectOnAuthChange(user, loading);

  if (loading) {
    return <p>Cargando...</p>;
  }

  return (
    <div>
      {user ? (
        <>
          <Main/>
        </>

      ) : (
        redirect ? <Navigate to="/signin" /> : <p>Hola, no estás logueado. Por favor inicia sesión.</p>
      )}
    </div>
  );
}

export default Home;