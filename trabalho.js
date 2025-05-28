
    function geradorDeTagsDeIdentificacao(petName){
        return petName.toUpperCase()
    }

    function verificarSePodeSerAdotado(idade, porte){
        let adotado = false
        if(idade == 1 && porte == 'M'){
            adotado = true
        } 
        return adotado
    }

    function calcularConsumoDeRacao(nome, idade, peso){
        let consumoDiario = peso * 30; 
        return consumoDiario * 10;
    }

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

    async function buscarDadoAsync(){
        let msg = 'Pipoca'
        return await msg
    }

    
    export {geradorDeTagsDeIdentificacao,verificarSePodeSerAdotado,calcularConsumoDeRacao, decidirTipoDeAtividadePorPorte, buscarDadoAsync}