import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";

describe('Pruebas en 08-imp-exp', ()=> {
    test('getHeroesById debe de retornar un heroe por ID', () => {
        const id = 1;
        const hero = getHeroeById( id );

        expect( hero ).toEqual({ id: 1,name: 'Batman',owner: 'DC'  })
    });

    test('getHeroesById debe de retornar undefined si no existe', () => {
        const id = 100;
        const hero = getHeroeById( id );

        expect( hero ).toBeFalsy()
    });

    test('getHeroesByOwner debe retornar heroes de DC', () => {
        const heroes = getHeroesByOwner('DC');

        expect(heroes.length).toBe(3);
        
    });

    test('getHeroesByOwner debe de retornar heroes de Marvel', () => {
        const heroesMarvel = getHeroesByOwner('Marvel');
        expect(heroesMarvel.length).toBe(2);
    });
});