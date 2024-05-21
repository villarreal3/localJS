import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/"><p>Home</p></Link></li>
        <li><Link to="/invoice"><p>Invoice</p></Link></li>
				<li><Link to="/daily"><p>Daily</p></Link></li>
				<li><Link to="/credit"><p>Credito</p></Link></li>
        <li><Link to="/stock"><p>Stock</p></Link></li>
				<li><Link to="/history"><p>History</p></Link></li>
        <li><Link to="/config"><p>Config</p></Link></li>
      </ul>
    </nav>
  );
}