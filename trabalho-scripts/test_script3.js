//Validando script Trabalho final Function calcularConsumoDeRacao

const nomeDog = "Oliver"
const pesoDog = 10
const idadeDog = 1
const racaoDiaria = calcularConsumoDeRacao(nomeDog, idadeDog, pesoDog)


console.log("Nome: ", nomeDog)
console.log("Peso: ", pesoDog)
console.log("Consumo diário: ", racaoDiaria)


function calcularConsumoDeRacao(nome, idade, peso){
    let consumoDiario = peso * 30; 
    return consumoDiario * 10;
}