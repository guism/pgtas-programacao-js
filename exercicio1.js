const numeroAula = "03"
const turma = "02"
let data = "05 de Abril"

console.log("Aula 03 da Turma " + turma + " no Sábado dia 05 de Abril")

console.log(`Aula ${ numeroAula } da Turma ${ turma } no Sábado dia ${ data }`)

console.log(data.length)

// split - separar a string
const nomesDeAlunos = "Giuliana André Goku Lucas Lenilson"

const nomesDeAlunosSplit = nomesDeAlunos.split(" ")

console.log(nomesDeAlunosSplit)

console.log(nomesDeAlunos.toLowerCase())  // minúsculo
console.log(nomesDeAlunos.toUpperCase())  // maiúsculo

console.log(nomesDeAlunos.includes("G"))

// Chai - biblioteca de asserções

console.log(nomesDeAlunos.replaceAll('a', 'i'))

const conceitosLogica = "            inteiro real cadeia de caracteres...           "

console.log(conceitosLogica.trim())

let dataParaCortar = "05 de Abril"
const cpf = "86189924611"

console.log(dataParaCortar.slice(0, 2))
console.log(cpf.slice(0, 3))

// 05 de Abril
// 0123456789