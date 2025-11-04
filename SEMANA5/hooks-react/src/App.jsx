//* HOOKS
//* Hook useState: Permite usar variables de estado dentro de un componente funcional. Nos retorna siempre un array con dos elementos(valor inicial, valor que se va ir actualizando).
//* Sintáxis:
// const [valorInicial, valorActualizado] = useState(1);
/*
import { useState } from "react"

//* example 1 - contador

const MyApp = () => {
  const [count, setCount]= useState(0) // hook usestate(aquí van los 
  // valores iniciales)
  
  // función anónima de tipo flecha(arrow)
  const handleClick = () =>{
    setCount(count+1);
  }

  // función normal
  function handleClick(){
    setCount(count + 2)
  }
  
  
  return (
    <div>
      <div>CLICK: {count}</div>
      <button onClick={handleClick}>CLICKME</button>
    </div>
  );
}
export default MyApp

//* example 2  -  form

import React, { useEffect, useState } from 'react'

const App = () => {
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
   
  const handleSubmit = (i) => {
    i.preventDefault();
    console.log(user, email);    
  }

  //* preventDefault(): se utiliza para evitar que ocurra una acció predeterminada de un evento
  
  //* input.target.value: combina dos propiedades para recuperar el valor de cualquier entrada que se ha invocado
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='Enter your User Name' onChange={(input)=>setUser(input.target.value)} value={user} required/>
        <input type='email' placeholder='Enter your Email' onChange={(input)=>setEmail(input.target.value)} value={email} required/>
        <button type='submit'>SUBMIT</button>        
      </form>      
    </div>
  )
}

export default App

//*Hook useEffect: Proporciona una forma de gestionar los efectos secundarios en un componente funcional.
//* Como lo usamos:
//*   - Agregando un detector de eventos para un button.
//*   - Para obtener datos desde una API cuando se monta el componente
//*   - Para realizar una acción cuando cambia el estado a los props(propiedades).
//*   - Para la limpieza de detectores de eventos cuando se desmonta el componente.
// sintáxis:
useEffect(()=>{
  // bloque de instrucciones
}, [someProp, someState])
*/
//* - Acepta un primer elemento como un callback, esta función se ejecuta después de cada renderizado, pero depende del segundo valor.
//* - El segundo argumento es un array de dependencias

//* example - request to API

import React, { useEffect, useState } from 'react'

const App = () => {
  const [data, setData] = useState([]);
  useEffect(()=>{
    fetch('https://fakestoreapi.com/products/2')
            .then(res=>res.json())            
            .then(data=>setData(data))
  }, []); // array vacio = solo se ejcuta al montar el componente
  
  return (
    <div>
      <p>
        title: {data.title}        
      </p>
      <p>
        price: {data.price}        
      </p>
    </div>
  )
}

export default App