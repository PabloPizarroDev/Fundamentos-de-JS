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

function imprimirNombreEnMayusculas ({nombre}) {
    console.log(nombre.toUpperCase())
}

imprimirNombreEnMayusculas(pablo)
imprimirNombreEnMayusculas(dario)
imprimirNombreEnMayusculas({nombre: 'pepito'})