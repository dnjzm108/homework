import React, { Component } from 'react'
import ClassComp from './component/ClassComp'
import FucnComp from './component/FuncComp'

class App extends Component {
    render() {
        return (
            <>
                <h1>hello React</h1>

                <ul className="Comp">
                    <ClassComp />
                    <FucnComp />
                    <ClassComp />
                    <FucnComp />

                </ul>
            </>
        )
    }
}

export default App  //import

//module.exports  -> require