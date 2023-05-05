test('Esta prueba no debe de fallar ', () => {
    if(1 === 0){
        throw new Error('Nos puedes dividir entre cero');
    }
});