

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
//  simbolisa una array []
var personas = [pablo, martin, dario, vicky,hernan]

for (var i = 0; i <personas.length; i++){
    var persona = personas[i]
    console.log(`${persona.nombre} mide ${persona.altura} mts`)
}