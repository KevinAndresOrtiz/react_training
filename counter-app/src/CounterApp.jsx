import PropTypes from "prop-types";


export const CounterApp = ({ counter }) => {
    function handleAdd() {
        console.log('+1');
        counter = 1000;
    }

    return(
        <>
        <h2>Counter App</h2>
        <p>{ counter }</p>
        <button onClick={ handleAdd }>
            +1
        </button>
        </>
    )
};

CounterApp.propTypes = {
    counter: PropTypes.number.isRequired
}

CounterApp.defaultProps = {
    counter : 0
}