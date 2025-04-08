const {Alumno} = require('../clases/Alumno.js');

const a1 = new Alumno();
a1.setNombre('Manuel');

let nombre = a1.mostrarNombre();
console.log(`Hola ${nombre}`);

const edadAlumno = new Alumno();
edadAlumno.setEdad('21');

let edad = edadAlumno.retornarEdad();
console.log(`Tenés ${edad} años`);

const materias = new Alumno();
let materiasAlumno = materias.mostrarMaterias();
console.log(`Cursas estas materias: ${materiasAlumno}`);

const agregarMateria = new Alumno();
agregarMateria.setMateria('Materia nueva');

let addMateria = agregarMateria.setMateria();
console.log(`Agregaste esta materia ${addMateria}`);

