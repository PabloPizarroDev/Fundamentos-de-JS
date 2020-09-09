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
const INCREMENTO_PESO = 0.3
const DIAS_DEL_ANO = 365
const aumentarDePeso = (persona) => persona.peso += INCREMENTO_PESO
const adelgazaDePeso = (persona) => persona.peso -= INCREMENTO_PESO
const comeMucho = () => Math.random ()< 0.3
const realizaDeporte = () => Math.random() < 0.4

const META= pablo.peso - 3
var dias = 0

while(pablo.peso > META) {
    if(comeMucho()){
        aumentarDePeso(pablo)
        //aumentar de peso
    }
    if(realizaDeporte()){
        adelgazaDePeso(pablo)
        //adelgazar
    }
    dias += 1
}


console.log(`pasaron ${dias} dias hasta que ${pablo.nombre} adelgazo 3 kg`)