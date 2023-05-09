import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe('Pruebas en 5-funciones', () => {
    test('getUser debe de retornar un objeto', () => {
        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };

        const user = getUser();

        expect( testUser ).toStrictEqual( user );
    });

    test('getUsuarioActivo debe de retornar un objeto', () => {
        const name = 'Kevin';
        const testUsuarioActivo = {
            uid: 'ABC567',
            username: name
        }

        expect(testUsuarioActivo).toStrictEqual(getUsuarioActivo(name))
    });
});