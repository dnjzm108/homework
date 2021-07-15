import React, { useContext, useReducer,useEffect } from 'react'
import {getComment} from './api/api'

import Store from './Store/context'
import reducer from './Store/reducer'

const CommentLayout = ({ children }) => {

    const globalStore = useContext(Store)
    console.log(globalStore);

    const [state, dispatch] = useReducer(reducer, globalStore)
    console.log(state);

    useEffect(async()=>{
        //console.log('최초실행 render');
        getComment(dispatch)
    },[])

  return (
        <>
        {/* Provider = state,dispatch */}
            <Store.Provider value={{state,dispatch}}>
                <ul className="comment">
                    {children}
                </ul>
            </Store.Provider>
        </>
    )
}


export default CommentLayout