import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr";


describe('Prubeas en 07-deses-arr', () => {

    test('Debe retornar un arreglo', () => {

        const [letters,number] = retornaArreglo();
        expect(letters).toEqual(expect.any(String));
        expect(number).toEqual(expect.any(number));

        expect(typeof letters).toBe('string');
        expect(typeof number).toBe('number');


     })



 });

