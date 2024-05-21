import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from './../account/AuthProvider';
import { Navigate } from 'react-router-dom';
import {useRedirectOnAuthChange} from '../account/useRedirectOnAuthChange';
import * as Styled from './Invoice.styled';
import './invoice.css';
import 'firebase/firestore';

function NewInvoice() {
  const [quantity, setQuantity] = useState(1); // Estado para la cantidad
  const [searchCode, setSearchCode] = useState(''); // Estado para el código de búsqueda
  const [searchResult, setSearchResult] = useState(''); // Estado para almacenar el resultado de la búsqueda

  const incrementQuantity = () => {
    if (quantity < 100) {
      setQuantity(quantity + 1);
    }
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleQuantityChange = (event) => {
    const value = event.target.value;
    if (!isNaN(value) && parseInt(value) >= 1 && parseInt(value) <= 100) {
      setQuantity(parseInt(value));
    }
  };

  
  const handleSearchCodeChange = (event) => {
    setSearchCode(event.target.value);
  };

  return (
    <Styled.InvoiceContentParent>
      <form className='formInvoice'>
        <button className='btnLess' type="button" onClick={decrementQuantity}>-</button>
        <button className='btnMore' type="button" onClick={incrementQuantity}>+</button>
        <div className='custom-select'>
          <select placeholder="Lavador">
            <option value="1">January</option>
            <option value="2">February</option>
            <option value="3">March</option>
            <option value="4">April</option>
            <option value="5">May</option>
            <option value="6">June</option>
            <option value="7">July</option>
            <option value="8">August</option>
            <option value="9">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>
        </div>
        <button className='btnSearch' type="submit" >Search</button>
        <button className='btnNew' type='submit'>New</button>
        <button className='btnDelete' type='submit' >Delete</button>
        <textarea
          id="quantity"
          className="quantity"
          rows="3"
          value={quantity}
          onChange={handleQuantityChange}
          readOnly 
        />
        <input
          type="text"
          className="search"
          id="search"
          placeholder='Código'
          maxLength={8}
          value={searchCode}
          onChange={handleSearchCodeChange}
        />
        <textarea className='txtDown' value={searchResult}></textarea>
      </form>
    </Styled.InvoiceContentParent>
  );
}



function Main() {
  return (
    <Styled.InvoiceParent>
      <NewInvoice/>
    </Styled.InvoiceParent>
  );
}

function Invoice() {
  const { user, loading } = useContext(AuthContext);
  const redirect = useRedirectOnAuthChange(user, loading);

  if (loading) {
    return <p><h2>Cargando...</h2></p>;
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

export default Invoice;
