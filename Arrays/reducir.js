

var pablo = {
    nombre: 'Pablo',
    apellido:'Pizarro',
    altura: 1.78,
    cantidadDeLibros: 132
}

var martin = {
    nombre: 'Martin',
    apellido:'Gomez',
    altura: 1.85,
    cantidadDeLibros: 90
}
var dario = {
    nombre: 'Dario',
    apellido:'Sanchez',
    altura: 1.65,
    cantidadDeLibros: 110
}
var vicky = {
    nombre: 'Vicky',
    apellido:'Zapata',
    altura: 1.60,
    cantidadDeLibros: 150
}
var hernan = {
    nombre: 'Hernan',
    apellido:'Gimenez',
    altura: 1.73,
    cantidadDeLibros: 70
}
var personas = [pablo, martin, dario, vicky,hernan]

/*var acum = 0

for (var i=0; i < personas.length; i++) {
    acum = acum + personas [i].cantidadDeLibros
}*/
const reducer = (acum, persona) => {
    return acum + persona.cantidadDeLibros
}
var totalDeLibros = personas.reduce(reducer, 0)

console.log(`En total todos tienen ${totalDeLibros} de libros`)
