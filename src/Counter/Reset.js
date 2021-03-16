import React, { useState } from 'react';

export function Reset({ lower, upper, count, reset }) {
    if (count > lower && count < upper) {
        return null;
    } else {
        return (
            <div>
                <div>You are out of bounds!</div>
                <button onClick={reset}>Reset</button>
            </div>
        );
    }
}