import React, { Fragment, useState} from "react";
import './index.css'

function LogIn(){
    const [datos, setDatos] = useState({
        name: '',
        lastName: ''
    })

    const handleInputChange = (event) => {
        // console.log(event.target.value)
        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        })
    }

    const enviarDatos = (event) => {
        event.preventDefault();
        console.log(datos.name + " " + datos.lastName)
    }

    return (
        <div className="centerDiv">
            <Fragment>
                <form action="" method="post" onSubmit={enviarDatos}>
                    <div>
                        <input 
                            placeholder="Usuario" 
                            className="" 
                            type="text" 
                            name="name"
                            onChange={handleInputChange}/>
                    </div>

                    <div>
                        <input 
                            placeholder="Contraseña" 
                            className="" 
                            type="text" 
                            name="lastName"
                            onChange={handleInputChange}/>
                    </div>
                    <div>
                        <button type="submit">Enviar</button>
                    </div>
                </form>
                <h3>{datos.name} <br/> {datos.lastName}</h3>
            </Fragment>
        </div>
    );
}

export default LogIn