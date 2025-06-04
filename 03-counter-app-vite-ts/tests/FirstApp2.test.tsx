import { render,screen } from "@testing-library/react";
import { FirstApp } from '../src/FirstApp';

    describe('pruebas en FirstApp2', () => { 

      const title='hola soy un titulo';


        test('debe de hacer match con el snapshot', () => { 

            const{container}= render(<FirstApp tittle={title}/> );
            expect(container).toMatchSnapshot();
         })

         test('should show message hola soy un titulo', () => { 

          render(<FirstApp tittle={title}/>);
          expect(screen.getByText(title)).toBeTruthy();


          })


          test('should show title in h1', () => {
          
            render(<FirstApp tittle={title}/>);
            expect(screen.getByRole('heading',{level: 1}).innerHTML).toContain(title);
           })





     })

