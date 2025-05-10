const dog = 'Oliver'
let cansou = false
let volta = 1

while (cansou == false) {
    
    if(volta <= 5){
        console.log(`nao esta cansado e estamos na volta ${volta}`)
        volta++
    } else {
        console.log(dog, `cansou! ja estamos na volta ${volta}`)
        cansou = true
    }

}
