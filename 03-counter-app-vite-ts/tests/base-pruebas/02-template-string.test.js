import { getSaludo } from "../../src/base-pruebas/02-template-string";


describe('Pruebas en 02-template-string', () => { 

    test('getSaludo dene de retornar "Hola Fernando"', () => {

        // 1. Inicializar
        const nombre = 'Fernando';
        const saludo = `Hola ${ nombre }`;
        // 2. Estimulo
        const result = getSaludo(nombre);
        // 3. Observar el comportamiento esperado
        expect(result).toBe(saludo);


     });
 });