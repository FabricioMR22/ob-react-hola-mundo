// Hook useState

// Componente de tipo funcion y acceder a su estado privado a traves de un hook y modificarlo

//rfc react function

import React,{ useState } from 'react';

const Ejemplo1 = () => {
    
    const ValorInicial = 0

    const PersonaInicial = {
        nombre: 'Fabricio',
        email: 'fabricio@gmail.com'
    }

    const [contador, setContador] = useState(ValorInicial);
    const [persona, setPersona] = useState(PersonaInicial);

    function incrementarContador() {
        setContador(contador+1)
    }

    function actualizarPersona() {
        setPersona(
            {
                nombre: 'pepe',
                email: 'pepe@gmail.com'
            }
        )
    }

    return (
        <div>
            <h1> *** Ejemplo de useState() ***</h1>
            <h2>CONTADOR: {contador}</h2>
            <h2>DATOS DE LA PERSONA</h2>
            <h3>NOMBRE: {persona.nombre}</h3>
            <h3>EMAIL: {persona.email}</h3>
            {/* Bloque de botones para actualizar el estado del componente */}
            <button onClick={incrementarContador}>Incrementar contador</button>
            <button onClick={actualizarPersona}>Incrementar persona</button>

        </div>
    );
}

export default Ejemplo1;


