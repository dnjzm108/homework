import React, { Component } from 'react'
import Counter from './component/counter/Counter'
import Layout  from './component/context/layout'
import Index from './component/styledComponent/index'
import Game from './component/game/game'
import Coment from './component/coment/Comment'
import Just from './component/just/comment'

class App extends Component {


    render() {
        return (
            <>
                {/* <Counter /> */}
                {/* <Layout /> */}
                <Just />
            </>
        )
    }
}

export default App