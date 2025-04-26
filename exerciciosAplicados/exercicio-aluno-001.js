/*

Exemplo de OBJECT*/

function calculateAdoption(name, age) {
    const adotado = age <= 2 ? 'adotado' : 'Não adotado';
    return {
        name: name,
        status: adotado
    };
}

// Chamar a função e armazenar o resultado
const resultado = calculateAdoption("Rex", 1);
console.log(resultado); // Saída: { name: 'Rex', status: 'adotado' }

const resultado2 = calculateAdoption("Max", 3);
console.log(resultado2); // Saída: { name: 'Max', status: 'Não adotado' }