const nomeAnimal = "Oliver"
const idade = 13
const peso = 35.5
const raca = "Pastor Australiano"
const adotado = false


console.log("-------TAG--------")
console.log("Nome: " + nomeAnimal.toUpperCase())
console.log("Idade: "+ idade)
console.log("Peso: "+ peso)
console.log("Raça: "+ raca)
if(adotado == false){
    console.log("Adotado: Não")
}else{
    console.log("Adotado: Sim")
}
console.log("------------------")

animais = [{nome: nomeAnimal, idade: idade}, {peso: peso, raca: raca, adotado: adotado}]
console.table(animais)




