import React from 'react'
import { reducer } from './reducer'

const Counter = () => {
    const [number, dispatch] = React.useReducer(reducer, 0)

    const onUp = () => {
        dispatch({ type: 'UP' })
    }
    const onDown = () => {
        dispatch({ type: 'Down' })
    }

    return (
        <>
            <div>
                <h2>{nuber}</h2>
                <button onClick={onUp}>+1</button>
                <button onClick={onDown}>-1</button>
            </div>
        </>
    )
}
export default Counter