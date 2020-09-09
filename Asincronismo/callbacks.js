const API_URL = 'https://swapi.py4e.com/api/'
const PEOPLE_URL = 'people/:id'
const opts =  { crossDomain: true }

const onPeopleResponse = function (persona){
    console.log(`hola yo soy, ${persona.name}`)
}

function obtenerPersonaje (id) {
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
    $.get(url, opts, onPeopleResponse)
}
//Asincronismo en js es que no sabemos en que orden va a llegar

obtenerPersonaje(1)
obtenerPersonaje(2)
obtenerPersonaje(3)


