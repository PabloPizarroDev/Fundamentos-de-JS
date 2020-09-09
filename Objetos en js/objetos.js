
//constructor de objeto
function Persona(nombre, apellido){
    this.nombre = nombre
    this.apellido = apellido
    return this
}
Persona.prototype.saludar = function() {
console.log(`hola me llamo ${this.nombre} ${this.apellido}`)
}

var pablo = new Persona('Pablo', 'Pizarro')
var erika = new Persona('Erika', 'Luna')
var arturo = new Persona('Arturo', 'Martinez')