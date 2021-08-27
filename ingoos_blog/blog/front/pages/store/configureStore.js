import { createWrapper } from 'next-redux-wrapper'
import {createStore} from 'redux'

const configureStore = () => {
    // context -> createContext(initalState)
    const store = createStore(reducer)

}

const wrapper = createrWrapper(configureStore, {})

export default wrapper