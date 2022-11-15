/**
 * Ejemplo Hooks:
 * - useState()
 * - useContext()
 * */  

//rfc

import React, {useState, useContext} from 'react';

/**
 * @returns Componente 1
 * 
 * Dispone de un conexto que va a tener un valor
 * que recibe desde el padre 
 */ 
 const miContexto = React.createContext(null)
const Componente1 = () => {

    const state = useContext(miContexto)
    return (
        <div>
            <h1>
                El token es: {state.token}
            </h1>
            <Componente2></Componente2>  
        </div>
    );
}

const Componente2 = () => {

    const state = useContext(miContexto)
    return (
        <div>
            <h2>
                La sesíon es: {state.sesion}
            </h2>
        </div>
    );
}

export default function MiComponenteContexto() {
    
    const estadoInicial = {
        token: '12345',
        sesion: 1
    }

    const [sessionData, setSessionData] = useState(estadoInicial);

    function actualizarSesion() {
        setSessionData(
            {
                token: 'JWT12345',
                sesion: sessionData.sesion + 1
            }
        )    
    }

  return (
    <miContexto.Provider value={sessionData}>
        {/* Todo lo que esta aqui, puede leer sesionData y actualizarse */}
        <h1>Ejemplo de useState() y useContext()</h1>
        <Componente1></Componente1>
        <button onClick={actualizarSesion}>Actualizar Sesion</button>
    </miContexto.Provider>
  )
}
