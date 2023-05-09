import { fireEvent, render, screen } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";

describe('Pruebas en <CounterApp />', ()=> {
    test('Debe hacerse match con el snapshot', () => {
        const counterValue = 100;
        const { container } = render(<CounterApp counter={counterValue}/>);
        expect(container).toMatchSnapshot();

    });

    test('debe mostrarse el valor del counter en el componente', () => {
        const counterValue = 100;
        render(<CounterApp counter={counterValue} />);
        expect(screen.getByText(counterValue)).toBeTruthy();
        expect(screen.getByText(counterValue).innerHTML).toBe(counterValue.toString());
    });

    test('debe de incrementar con el boton +1', () => {
        render(<CounterApp counter={10} />);
        fireEvent.click(screen.getByText('+1'));
        expect(screen.getByText('11')).toBeTruthy();
    });
    test('debe de decrementar con el boton -1', () => {
        render(<CounterApp counter={10} />);
        fireEvent.click(screen.getByText('-1'));
        expect(screen.getByText('9')).toBeTruthy();
    });

    test('debe de funcionar el boton de reset', () => {
        render(<CounterApp counter={10} />);
        fireEvent.click(screen.getByText('Reset'));
        expect(screen.getByText('10')).toBeTruthy();
    });
});