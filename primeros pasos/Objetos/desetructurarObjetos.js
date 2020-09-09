var pablo = {
    nombre: 'Pablo',
    apellido:'Pizarro',
    edad: 35
}
var dario = {
    nombre: 'Dario',
    apellido:'Sanchez',
    edad: 40
}

function imprimirNombreEnMayusculas (persona) {
    //var nombre = persona.nombre
    var {nombre}= persona
    console.log(nombre.toUpperCase())
}

imprimirNombreEnMayusculas(pablo)
imprimirNombreEnMayusculas(dario)
imprimirNombreYEdad(pablo)
imprimirNombreYEdad(dario)
//imprimirNombreEnMayusculas({nombre: 'pepito'})

function imprimirNombreYEdad (años) {
    var {edad}= años
    console.log(edad)
}



 



