import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe('Prueba en 09-promesas', () => {
    test('getHeroesByIdAsync debe de retornar un heroe', (done)=>{
        const id = 1;
        getHeroeByIdAsync(id).then(hero => {
            expect(hero).toStrictEqual({id: 1, name: "Batman", owner: "DC"});
            done();
        })
        
    });
});