import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './componentes/card'
import logo from '/sadFace_404.png'


function App() {
  let nombre = 'Juan';
  let edad = 28;
  let activo = true;
  const titulo = <h1>React</h1>;
  let detalle = <p>React es una libreria de JS</p>

  const alumnos = [
    'manu',
    'guada',
    'luli',
    'vicky',
    'dylan',
    'lucas'
  ];

  const alumnosList = alumnos.map((alumno) => 
    <li>
        {alumno}
    </li>
  )

  const objeto = {
    cantidad: 100,
    desc: 10
  }

  return(
    <>
      <h1 className='info'>Semana 09</h1>
      <p>Sintaxis JSX</p>

      <Card nombre='Teclado RGB' descripcion='Teclado mecanico RGB' dato={objeto} precio={50}></Card>

      <Card nombre='Mouse RGB' descripcion='Mouse inalambrico RGB' dato={objeto} precio={25}/>

      <img src={logo} alt="Carita triste" />
      {detalle}
      <p>Tu nombre es {nombre.toUpperCase()}</p>
      <p>Tu edad es: {edad} </p>
      <ul>
        {alumnosList}
      </ul>
    </>
  )
}

export default App
