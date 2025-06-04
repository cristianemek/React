import { fireEvent, render, screen } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";




describe('pruebas en CounterApp', () => { 

    test('debe hacer match con el snapshot', () => {

        const {container}= render(<CounterApp />)
        expect(container).toMatchSnapshot();

    })

    test('debe de incrementar con el boton +1', () => { 
        render(<CounterApp />);
        fireEvent.click(screen.getByText('+1'))
        expect(screen.getByText('1')).toBeTruthy();

     })

     test('debe de decrementar con el boton -1', () => {
        render(<CounterApp />);
        fireEvent.click(screen.getByText('-1'));
        const contador = screen.getByRole('heading', { level: 2 });
        expect(contador.textContent).toBe('-1');

     })

     test('debe de resetear el valor', () => { 
        render(<CounterApp />);
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByText('reset'))
        expect(screen.getByText('0')).toBeTruthy();

     })

     test('should set 5 to new default value', () => { 

        const{container}= render(<CounterApp />);
        const inputBtn = container.querySelector('input[type="number"]');
        const contador = screen.getByRole('heading', { level: 2 });

        if (!inputBtn) {
            throw new Error('Input element not found');
        }
        fireEvent.change(inputBtn, { target: { value: '5' } });
        expect(contador.innerHTML).toContain('5')



      })






 })