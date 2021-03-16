import React, { useState } from 'react';

import { Reset } from './Reset';

export function Counter({ lower, upper, initial, increment }) {
    const [ count, setCount ] = useState(initial);

    const minus = () => {
        const val = count - increment;

        setCount(val);
    };

    const add = () => {
        const val = count + increment;

        setCount(val);
    };

    const reset = () => {
        setCount(initial);
    };

    return (
        <div>
            <div>{count}</div>
            <button onClick={minus}>-</button>
            <button onClick={add}>+</button>
            <Reset lower={lower} upper={upper} count={count} reset={reset} />
        </div>
    );
}