import React, { Component } from 'react'
import Counter from './component/counter/Counter'
import Layout  from './component/context/layout'
import Index from './component/styledComponent/index'
import Game from './component/game/game'

class App extends Component {


    render() {
        return (
            <>
                {/* <Counter /> */}
                {/* <Layout /> */}
                <Game />
            </>
        )
    }
}

export default App