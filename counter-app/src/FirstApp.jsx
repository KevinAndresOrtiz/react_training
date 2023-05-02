import { Fragment } from "react";

const getSaludo = () => {
    return 'Este es mi primer llamado de una funcion'
}

export const App = () => {
    return (
        <Fragment>
            <h1>Hola Mundo</h1>
            {getSaludo()}
            <p>Tengo 29 años</p>
        </Fragment>
    );
}
