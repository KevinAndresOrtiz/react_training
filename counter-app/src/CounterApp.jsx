import PropTypes from "prop-types";


export const CounterApp = ({ counter }) => {
    return(
        <>
        <h2>Counter App</h2>
        <p>{ counter }</p>
        </>
    )
};

CounterApp.propTypes = {
    counter: PropTypes.number.isRequired
}

CounterApp.defaultProps = {
    counter : 0
}