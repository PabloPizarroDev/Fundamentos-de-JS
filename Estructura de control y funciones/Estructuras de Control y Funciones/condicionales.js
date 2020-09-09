var pablo = {
    nombre: 'Pablo',
    apellido: 'Pizarro',
    edad: 35,
    ingeniero: false,
    cocinero: true,
    dj: false,
    guitarrista: true,
    drones: false
}

var juan = {
    nombre:'Juan',
    apellido:'Gomez',
    edad: 13
}



function imprimirProfesiones(persona){
    console.log(`${persona.nombre} es:`)

    if(persona.ingeniero) {
        console.log ('ingienero')
    }

    if(persona.cocinero) {
    console.log('cocinero')
     }

    if(persona.dj) {
    console.log('dj')
    }

    if(persona.guitarrista) {
     console.log('guitarrista')
    }

    if(persona.drones) {
     console.log('drones')
    }
 
    
}
const MAYORIA_DE_EDAD = 18

function esMayorDeEdad(persona) {
    return persona.edad >= MAYORIA_DE_EDAD
     }


function imprimirSiEsMayorDeEdad(persona){
    if (esMayorDeEdad(persona)){
        console.log(`${persona.nombre} es mayor de edad`)
    } else {
        console.log(`${persona.nombre} es menor de edad`)
    }
}