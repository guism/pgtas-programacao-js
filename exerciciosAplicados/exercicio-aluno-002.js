

const nomeDog = "Oliver"
const pesoDog = 10
const racaoDiaria = calcularRacaoDiaria(pesoDog)
const estoqueDisponivel = 5000
const diasDisponiveis = calcularEstoque(racaoDiaria, estoqueDisponivel)



console.log("Nome: ", nomeDog)
console.log("Peso: ", pesoDog)
console.log("Consumo diário estimado: ", racaoDiaria)
console.log("Duração estoque: ", diasDisponiveis)



function calcularRacaoDiaria(peso){

    let resultado = (peso*30)
    return resultado  
}

function calcularEstoque(racaoDiaria,estoque){

    let consumoDiario = peso * 30; 
    return consumoDiario * 1000;
}