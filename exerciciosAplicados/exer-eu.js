
// Chamar a função com diferentes valores de idade
const resultado1 = calculateAdoption("Oliver", 1); // Passando 1 como idade
console.log(resultado1); // Saída: 'adotado'

const resultado2 = calculateAdoption("Oliver", 3); // Passando 3 como idade
console.log(resultado2); // Saída: 'Não adotado'

function calculateAdoption(name, age){
    const adotado = age <= 2 ? 'adotado':'Não adotado'
    return {
        name: name,
        status: adotado
    }
}