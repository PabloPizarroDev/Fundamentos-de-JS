var contador = 0 

const llueve = () => Math.random() < 0.25



do{
        //=+1
    contador++
} while(!llueve())

console.log(`Fui a ver si llovia ${contador} veces`)