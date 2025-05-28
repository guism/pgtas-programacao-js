//Validando script Trabalho final Function decidirTipoDeAtividadePorPorte
let porte1 = 'pequeno'
let porte2 = 'medio'
let porte3 = 'grande'

let resultado1 = decidirTipoDeAtividadePorPorte(porte1)
console.log(resultado1)
let resultado2 = decidirTipoDeAtividadePorPorte(porte2)
console.log(resultado2)
let resultado3 = decidirTipoDeAtividadePorPorte(porte3)
console.log(resultado3)

function decidirTipoDeAtividadePorPorte(porte){
    if (porte == 'pequeno'){
        let msg = 'brincar dentro de casa'
        return msg
    }
    if (porte == 'medio'){
        let msg = 'brincar no parque'
        return msg
    }
    if (porte == 'grande'){
        let msg = 'brincar na praia'
        return msg
    }

}