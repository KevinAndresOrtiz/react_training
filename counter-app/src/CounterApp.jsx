import PropTypes from "prop-types";
import { useState } from "react";


export const CounterApp = ({ counter }) => {
    const [ counterValue, setCounterValue ] = useState(counter);
    const handleAdd = ()=> {
        setCounterValue(counterValue + 1);
    }

    const handleDecrease = () => {
        setCounterValue(counterValue - 1);
    }

    const handleReset = () => {
        setCounterValue(counter);
    }

    return(
        <>
        <h2>Counter App</h2>
        <p>{ counterValue }</p>
        <button onClick={ handleAdd }>
            +1
        </button>
        <button onClick={ handleDecrease }>
            -1
        </button>
        <button onClick={ handleReset }>
            Reset
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