import React, { useState, useEffect} from 'react';

const Ejercicio456 = () => {

   const [fecha, setFecha] = useState(new Date());
   const [edad, setEdad] = useState(0);
   const [nombre, setNombre] = useState('Martin');
   const [apellidos, setApellidos] = useState('San José');

   const tick = ()=>{
      setEdad(edad + 1)
      setFecha(new Date())
   }

   useEffect(() => {
      
      const timerID = setInterval(()=> {
      tick()
      },1000)

      return () => {
         clearInterval(timerID);
      };
   }, );
   
   return (
      <div>
         <h2>
            Hora Actual: {fecha.toLocaleTimeString()}
         </h2>
         <h3>
            {nombre} {apellidos}
         </h3>
         <h1>
            Edad: {edad}
         </h1>
      </div>
   );

   
}

export default Ejercicio456;
