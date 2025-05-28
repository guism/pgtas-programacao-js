//Validando script Trabalho final Function verificarSePodeSerAdotado
    function verificarSePodeSerAdotado(idade, porte){
        let adotado = false
        if(idade == 1 && porte == 'M'){
            adotado = true
        } 
        return adotado
    }

    let adotado = verificarSePodeSerAdotado(1,'M')
    console.log(adotado)