import '../index.css'
import Head from 'next/head'
import { createContext, useContext } from 'react'
import Store,{initalState} from './store/context'
import {useReducer} from 'react'
import { reducer } from './store/reducer'


const App = ({ Component }) => {
    const globalContext = useContext(Store)
    const[state,dispatch] = useReducer(reducer,globalContext)

    return (
        <>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <link href="https://fonts.googleapis.com/css2?family=Zen+Tokyo+Zoo&display=swap" rel="stylesheet" />
            </Head>
            <Store.Provider value={state,dispatch}>
                <Component /> {/*우리가 만든 파일이 여기에 위치해요*/}
            </Store.Provider>
        </>
    )
}

export default App