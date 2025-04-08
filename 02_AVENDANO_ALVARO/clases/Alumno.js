class Alumno {

    //Atributos
    nombre = "";
    apellido = "";
    edad = 0;
    carrera = "";
    materias = [
        "Aplicaciones Hibridas",
        "Sistemas Operativos",
        "Programacion II"
    ];

    // Metodos
    mostrarNombre = function() {
        return(this.nombre + this.apellido);
    };
    mostrarMaterias = function(){
        return(this.materias);
    };
    retornarEdad = function(){
        return(this.edad);
    };
    setNombre(nombre){
        this.nombre = nombre;
    };
    setEdad(edad){
        this.edad = edad;
    };
    mostrarCarrera = function(){
        return this.carrera;
    };
    setMateria(agregarMateria){
        this.agregarMateria = agregarMateria;
    }
};

module.exports = {Alumno}