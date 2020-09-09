var signo = prompt('¿Cual es tu signo?')

switch(signo){
    case 'virgo':
        console.log('No dude en las determinaciones que debe tomar en este momento, ya que luego pueden surgir errores de los que se puede lamentar. Piense bien antes de actuar.')
        break
    case 'picis':
        console.log('Durante esta jornada, aproveche su magnetismo y muéstrese sin reservas frente a los demás. Sepa que hoy será el centro de atención de todas las miradas.')
        break
    case 'leo':
        console.log('Sepa que pronto saldrán a la luz algunos cuestionamientos que habían quedado sin respuesta y claridad en sus pensamientos. Resuélvalos y actúe rápido.')
        break
        default:
            console.log('no es un signo valido')
            break
}



