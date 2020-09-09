//constructor de objeto
function Persona(nombre, apellido, altura){
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
}
//siempre conviene hacer los prototipos juntos no por separados
 /*Persona.prototype.saludar = function() {
console.log(`hola me llamo ${this.nombre} ${this.apellido}`)
}*/
Persona.prototype.saludar = function(){
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}

Persona.prototype.soyAlto = function() {
    return this.altura > 1.8
 }


var pablo = new Persona('Pablo', 'Pizarro',1.75)
var erika = new Persona('Erika', 'Luna', 1.65)
var arturo = new Persona('Arturo', 'Martinez',1.89)

