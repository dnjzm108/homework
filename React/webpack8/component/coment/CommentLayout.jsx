import React, { useContext, useReducer } from 'react'

import Store from './Store/context'
import reducer from './Store/reducer'

const CommentLayout = ({ children }) => {

    const globalStore = useContext(Store)
    console.log(globalStore);

    const [state, dispatch] = useReducer(reducer, globalStore)
    console.log(state);

    return (
        <>
            <Store.Provider value={{state,dispatch}}>
                <ul className="comment">
                    {children}
                </ul>
            </Store.Provider>
        </>
    )
}


export default CommentLayout