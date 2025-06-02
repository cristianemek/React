
describe('Pruebas en <Demo Component />', () => { 

    test('esta prueba no falla', () => { 
       
        //1. inicializar
        const message = 'Hola Mundo';
    
        //2. estimulo
        const message2= message.trim();
    
        //3. observar el comportamiento esperado
        expect(message).toBe(message2);
    
     })

 })




