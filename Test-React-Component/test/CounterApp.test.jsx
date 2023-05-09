import { render, screen } from "@testing-library/react";
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
});