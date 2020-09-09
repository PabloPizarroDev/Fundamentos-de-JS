var pablo = {
    nombre: 'Pablo',
    apellido: 'Pizarro',
    edad: 35,
    peso: 75
}

console.log(`Al inicio del año ${pablo.nombre} pesa ${pablo.peso}kg `)


/*function aumentaDePeso (persona) {
    return persona.peso += 200
}*/
const INCREMENTO_PESO = 0.2
const DIAS_DEL_ANO = 365
const aumentarDePeso = (persona) => persona.peso += INCREMENTO_PESO
const adelgazaDePeso = (persona) => persona.peso -= INCREMENTO_PESO

for (var i = 1; i <= DIAS_DEL_ANO; i++) {
    var random = Math.random()
    
    if(random < 0.25){
        aumentarDePeso(pablo)
        //aumenta de peso
     }   else if(random<0.25){  
         adelgazaDePeso(pablo)
        //adelgazar    
     }
}

console.log(`Al final del año ${pablo.nombre} pesa ${pablo.peso.toFixed(2)} kg`)