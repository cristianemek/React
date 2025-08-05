import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import { MyCounterApp } from "./MyCounterApp";


const incrementMock = vi.fn();
const decrementMock = vi.fn();
const resetMock = vi.fn();


vi.mock('../hooks/useCounter', ()=> ({
    useCounter: ()=>({
        counter:20,
        increment : incrementMock,
        decrement : decrementMock,
        reset : resetMock,
    })
}));

describe('MyCounterApp ',()=>{
    test('should render the component', () => { 
        render(<MyCounterApp />)

          expect(screen.getByRole('heading',{level:1}).innerHTML).toContain(
            `Counter: 20`
        );

        expect(screen.getByRole("button", {name: '+1'})).toBeDefined();
        expect(screen.getByRole("button", {name: '-1'})).toBeDefined();
        expect(screen.getByRole("button", {name: 'Reset'})).toBeDefined();
     });

     test('should call incremente if button is clicked', () => { 
        render(<MyCounterApp />)
         const incrementButton = screen.getByRole('button',{name:'+1'});

        fireEvent.click(incrementButton);

        expect(incrementMock).toHaveBeenCalled();
        expect(incrementMock).toHaveBeenCalledTimes(1);

        expect(decrementMock).not.toHaveBeenCalled();
        expect(resetMock).not.toHaveBeenCalled();

        fireEvent.click(incrementButton);

        expect(incrementMock).toHaveBeenCalledTimes(2);

      });
});