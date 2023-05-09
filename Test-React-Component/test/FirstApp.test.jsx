import { render } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe("Pruebas en <FirstApp />", () => {
  test("debe de hacer match con el snapshot", () => {
    const title = "Hola mi nombre es Kevin";
    const { container } = render(<FirstApp title={title} />);
    expect(container).toMatchSnapshot();
  });

  test("debe de mostrar el titulo en un h1", () => {
    const title = "Hola mi nombre es Kevin";
    const {  getByText, getByTestId } = render(
      <FirstApp title={title} />
    );

    expect(getByText(title)).toBeTruthy();
    expect(getByTestId("test-title")).toBeTruthy();
    expect(getByTestId("test-title").innerHTML).toContain(title);
    // const h1 = container.querySelector('h1');
    // expect(h1.innerHTML).toContain(title);
  });

  test("debe de mostrar el subtitulo enviado por props", () => {
    const title = "Hola soy Goku";
    const subtitle = "soy un subtitulo";
    const { getAllByText } = render(
      <FirstApp title={title} subTitle={subtitle} />
    );
    expect(getAllByText(subtitle).length).toBe(2);
  });
});
