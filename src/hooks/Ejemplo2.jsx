//  useState() useRef() useEffect()

import React, {useState, useRef, useEffect} from 'react';

const Ejemplo2 = () => {

    const [contador1, setContador1] = useState(0);
    const [contador2, setContador2] = useState(0);

    // Vamos a crear una referencia con useRef() asociar un lemento del DOM a una variable

    const miRef = useRef()

    function incrementar1() {
        setContador1(contador1+1)
    }

    function incrementar2() {
        setContador2(contador2+1)
    }

    /* useEffect(() => {
        console.log('Cambio en el estado del componente')
        console.log('Mostrando referencia a el elemento del DOM')
        console.log(miRef)
    }); */

    useEffect(() => {
        console.log('CAMBIO EN EL ESTADO DEL CONTADOR1 O CONTADOR2')
        console.log('Mostrando Referencia a elemento del DOM')
        console.log(miRef)
    }, [contador1,contador2]);

    return (
        <div>
            <h1> *** Ejemplo de useState(),useRef() y useRef() ***</h1>
            <h2>CONTADOR1: {contador1}</h2>
            <h2>CONTADOR2: {contador2}</h2>
            <h5 ref={miRef}>
                Ejemplo de elemento de referenciado
            </h5>
            <div>
                <button onClick={incrementar1}>Incrementar1</button>
                <button onClick={incrementar2}>Incrementar2</button>
            </div>
        </div>
    );
}

export default Ejemplo2;
