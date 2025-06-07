let texto = 'Guilherme';
let contador = 0;

function retornaVogais(texto) {
    const listaDeCaracteres = texto.split('');
    
    listaDeCaracteres.forEach(element => {
        if (element == 'a') {
            contador++;
        }
        if (element == 'e') {
            contador++;
        }
        if (element == 'i') {
            contador++;
        }
        if (element == 'o') {
            contador++;
        }
        if (element == 'u') {
            contador++;
        }
    });
    
    return contador;
}

let resultado = retornaVogais(texto);
console.log(resultado);