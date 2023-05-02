import { Fragment } from "react";


export const App = ( { title, subtitle  } ) => {
    return (
        <Fragment>
            {title}
            <p>{ subtitle }</p>
        </Fragment>
    );
}
