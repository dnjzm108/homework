import React,{useContext,useRefucer,useEffect} from 'react'
import {getComment} from '../coment/api/api'
import Store from '../coment/Store/context'
import reducer from '../coment/Store/reducer'


const CommentLayout = ({ children }) => {
    const globalStore = useContext(Store)

    const [state, dispatch] = useReducer(reducer,globalStore)

    useEffect(async()=>{
        getComment(dispatch)
    },[])
    
    return (
        <>
        <Store.Provider value = {{state,dispatch}}>
            <ul>
                {children}
            </ul>
            </Store.Provider>
        </>
    )
}


export default CommentLayout