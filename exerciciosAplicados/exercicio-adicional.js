let inteiroStrings = [1,'1',2,'2']
let resultado
resultado = removerString(inteiroStrings)

console.log(resultado)

function removerString(lista){
    return lista.filter(elemento => typeof elemento === 'number')
}
