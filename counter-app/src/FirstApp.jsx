import PropTypes  from "prop-types";
import { Fragment } from "react";


export const App = ( { title, subtitle  } ) => {
    return (
        <Fragment>
            {title}
            <p>{ subtitle }</p>
        </Fragment>
    );
}

App.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string
};
