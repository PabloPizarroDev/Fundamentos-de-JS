
var pablo = {
    nombre: 'Pablo',
    apellido:'Pizarro',
    altura: 1.78
}

var martin = {
    nombre: 'Martin',
    apellido:'Gomez',
    altura: 1.85
}
var dario = {
    nombre: 'Dario',
    apellido:'Sanchez',
    altura: 1.65
}
var vicky = {
    nombre: 'Vicky',
    apellido:'Zapata',
    altura: 1.60
}
var hernan = {
    nombre: 'Hernan',
    apellido:'Gimenez',
    altura: 1.73
}
//const esAlta = persona => {
 //   return persona.altura > 1.7

//}

var personas = [pablo, martin, dario, vicky,hernan]

//var personasAltas = personas.filter(esAlta)

//    var personasAltas = personas.filter (function(persona){
 //   return persona.altura > 1.7
//    })

//console.log(personasAltas)

const esBaja = persona => {
    return persona.altura < 1.7
}

var personasBajas = personas.filter(esBaja)

console.log(personasBajas)