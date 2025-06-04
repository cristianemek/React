import { render } from "@testing-library/react";
import { FirstApp } from '../src/FirstApp';

    describe('pruebas en FirstApp', () => { 

        test('debe de hacer match con el snapshot', () => { 

            const{container}= render(<FirstApp/> );
            expect(container).toMatchSnapshot();
         })

         test('debe de mostrar el titulo en un h1', () => { 

            const tittle='cris';
            const {container,getByText}= render(<FirstApp tittle={tittle}/>)
            expect(getByText(tittle)).toBeTruthy();
            const h1= container.querySelector('h1');
            expect(h1?.innerHTML).toContain(tittle);

          })

          test('should mostrar el subtitulo', () => { 

            const subTittle='sub';

            const {getAllByText}=render(<FirstApp subtittle={subTittle}/>);
            expect(getAllByText(subTittle).length).toBe(2);



           })





     })

