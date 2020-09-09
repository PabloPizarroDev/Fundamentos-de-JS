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
//imprimirNombreEnMayusculas({nombre: 'pepito'})

function cumpleanos(persona){
    return{
        ...persona,
        edad: persona.edad + 1
    }
    
}