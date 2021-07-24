import React from 'react'
import Reducer from './store/reducer'
import initalState from './store/initalState'


const Form = () =>{
    const [state,dispatch] = React.useReducer(Reducer,initalState)
    const [content,setContent] = React.useState('')
    const handleSubmit = (e) =>{
        e.preventDefault()
        dispatch({type:'SUBMIT'})
    }

    const handleChange = (e) =>{
        const {value} = {...e.target}
        dispatch({type:"CHANGE",payload:value})
    }
    return(
        <>
         <form onSubmit={handleSubmit}>
                        <input type="text"
                         onChange={handleChange}
                          value="0" />
                        <button type="submit">등록</button>
                    </form>
        </>
    )
}


export default Form