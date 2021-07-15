import React from "react";

export default function Counter({count, calcFunc}) {
    return (
        <div>
            <p>Count: {count}</p>
            <button className='text-lg' onClick={() => calcFunc(1)}>+</button>
            <button onClick={() => calcFunc(-1)}>-</button>
            <button onClick={() => calcFunc(0)}>Reset</button>
        </div>
    )
}