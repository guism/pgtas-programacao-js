
try {
    console.log('Tentando alimentar o Pet...')
    throw new Error("O Pet não existe.");
    
} catch (error) {
    console.log("Error", error.message)
}