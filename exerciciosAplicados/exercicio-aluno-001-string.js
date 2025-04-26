function calculateAdoption(name, age) {
    const adotado = age <= 2 ? 'adotado' : 'Não adotado';
    return `${name} está ${adotado}`; // Retorna uma string
}

// Chamar a função e armazenar o resultado
const resultado = calculateAdoption("Rex", 1);
console.log(resultado); // Saída: 'Rex está adotado'

const resultado2 = calculateAdoption("Max", 3);
console.log(resultado2); // Saída: 'Max está Não adotado'