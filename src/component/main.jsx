import React, { useContext } from 'react';
import { Routes, Route, } from 'react-router-dom'; 
import SignIn from './../account/signIn';
import Home from './home';
import Invoice from './Invoice';
import Daily from './Daily';
import Credit from './Credit';
import Stock from './Stock';
import History from './History';
import Config from './Config';

import { AuthContext } from './../account/AuthProvider';
import { Navigate } from 'react-router-dom';
import {useRedirectOnAuthChange} from '../account/useRedirectOnAuthChange';


function Main() {
    const { user, loading } = useContext(AuthContext);
    const redirect = useRedirectOnAuthChange(user, loading);
  
    if (loading) {
      return <p>Cargando...</p>;
    }
  
    return (
      <div>

        <main>
          <Routes>
            <Route path="/signin" element={<SignIn />} />
            {/* Redirección de la ruta raíz */}
            {user ? (
                <>
                  <Route path="/" element={<Home />} />
                  <Route path="/invoice" element={<Invoice />} />
                  <Route path="/daily" element={<Daily />} />
                  <Route path="/credit" element={<Credit />} />
                  <Route path="/stock" element={<Stock />} />
                  <Route path="/history" element={<History />} />
                  <Route path="/config" element={<Config />} />
                
                </>
    
            ) : (
            redirect ? <Navigate to="/signin" /> : <p>Hola, no estás logueado. Por favor inicia sesión.</p>
            )}
          </Routes>
        </main>
      </div>
    );
  }
  
  export default Main;
  