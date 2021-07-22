import React, { Component } from 'react'
import Comment from './component/comment'
import Numder from './component/number'
import Numder2 from './component/number2'


const App = () => {
    return (
        <>
            <Numder />
            <h1>--------------------------------</h1>
            <Numder2 />
            <h1>------------------------------------</h1>
            <Comment />
        </>
    )
}

export default App