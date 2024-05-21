import React, { useContext } from 'react';
import { AuthContext } from './../account/AuthProvider';
import { Navigate } from 'react-router-dom';
import {useRedirectOnAuthChange} from '../account/useRedirectOnAuthChange';
import * as Styled from './Stock.styled';
import { db } from "../firebase/firebaseConfig"
import { doc, setDoc } from "firebase/firestore";

function StockObject(){
  return (
    <Styled.stockChild>
      <Styled.stockTable>
        <caption>Stock</caption>
        <thead>
          <tr>
            <th>Codigo</th>
            <th>Articulo</th>
            <th>Stock</th>
          </tr>
        </thead>
        <tr>
          <td>B000001</td>
          <td>Soda vidrio</td>
          <td>100</td>
        </tr>
      </Styled.stockTable>
    </Styled.stockChild>
  );
}

function NewObject(){
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Obtener los valores del formulario
    const formData = new FormData(event.target);
    const ncode = formData.get("ncode");
    const nname = formData.get("nname");
    const nprice = parseFloat(formData.get("nprice"));
    const inventariable = formData.get("inventariable") === "on"; // Convertir a booleano

    try {
      // Agregar el documento a Firestore
      const objectRef = doc(db, "objects", ncode); // Crear una referencia al documento usando el código como ID
      await setDoc(objectRef, {
        name: nname,
        price: nprice,
        inventariable: inventariable
      }, { merge: true }); // Merge para actualizar solo los campos especificados y mantener los existentes
      console.log("Documento agregado correctamente");
    } catch (error) {
      console.error("Error al agregar documento: ", error);
    }
  };
  return (
    <Styled.stockChild>
      <h2>New object</h2>
      <Styled.newObjectForm onSubmit={handleSubmit}>
        <div>
          <Styled.lblInput for="ncode">Code</Styled.lblInput>
          <input type="text" name="ncode" id="" required/>
        </div>

        <div>
          <Styled.lblInput for="nname">Name</Styled.lblInput>
          <input type="text" name="nname" id="" required/>
        </div>

        <div>
          <Styled.lblInput for="nprice">Price</Styled.lblInput>
          <input type="number" name="nprice" id="" min="0" step="any" required/>
        </div>

        <div>
          <Styled.lblInput for="P">Inventariable</Styled.lblInput>
          <input type="checkbox" required/>
        </div>

        <button type="submit">Nuevo objeto</button>
      </Styled.newObjectForm>
    </Styled.stockChild>
  );
}

function Main() {
  return (
    <Styled.stockMain>
      <>
        <StockObject/>
      </>

      <>
        <NewObject/>
      </>
    </Styled.stockMain>
  );
}

function Stock() {
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

export default Stock;