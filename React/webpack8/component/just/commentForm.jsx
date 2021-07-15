import React,{useContext,useState} from 'react'
import Store from '../coment/Store/context'

const CommentForm = () => {
    const [list, setList] = useState('')
    const {state,dispatch} = useContext(Store)

    const change = (e) => {
        const {value} = {...e.target}
        setList(value)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        dispatch({type:'CREATE' , payload : { userid:'web7722' , content: list , date:'2021-8-20'}})
        setList('')
    }


    return (
        <>
            <li>
                <form onSubmit={onSubmit}>
                    <input type="text"
                        onChange={change}
                        value={list}
                    />
                    <button
                        type="submit"
                    >저장</button>
                </form>
            </li>
        </>
    )
}


export default CommentForm