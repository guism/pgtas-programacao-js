
const brinquedos = ['Bola', 'Osso', 'Corda', 'Sino']

entregadorBrinquedos(brinquedos)


function entregadorBrinquedos(listBrinquedos){
    listBrinquedos.forEach(element => {
        console.log('Entregando ',element)
    });
}