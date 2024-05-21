import React from 'react';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom'; // Importa BrowserRouter y Routes
import { AuthProvider } from './account/AuthProvider';
import './App.css';
import SignIn from './account/signIn';
import Home from './component/home';
import Invoice from './component/Invoice';
import Daily from './component/Daily';
import Credit from './component/Credit';
import Stock from './component/Stock';
import Navbar from './component/Navbar';
import History from './component/History';
import Config from './component/Config';

function App() {
  return (
    <Router> {/* Envuelve tu aplicación con BrowserRouter */}
      <AuthProvider>
        <Navbar/>
        <main>
          <Routes>
            <Route path="/signin" element={<SignIn />} />
            <Route path="/invoice" element={<Invoice />} />
            <Route path="/daily" element={<Daily />} />
            <Route path="/credit" element={<Credit />} />
            <Route path="/stock" element={<Stock />} />
            <Route path="/history" element={<History />} />
            <Route path="/config" element={<Config />} />
            {/* Redirección de la ruta raíz */}
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
      </AuthProvider>
    </Router>
  );
}

export default App;
