import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import logo from '/sadFace_404.png'

function App() {
  let nombre = 'Juan';
  let edad = 28;
  let activo = true;
  const titulo = <h1>React</h1>;
  let detalle = <p>React es una libreria de JS</p>
  return(
    <>
      <h1 className='info'>Semana 09</h1>
      <p>Sintaxis JSX</p>
      <img src={logo} alt="Carita triste" />
      {detalle}
      <p>Tu nombre es {nombre.toUpperCase()}</p>
      <p>Tu edad es: {edad} </p>
    </>
  )
}

export default App
