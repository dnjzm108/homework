import React from 'react'

const CommentForm = () =>{
    const [list,setList] = React.useState('')

    const change = (e) =>{
        console.log(e.target.value);
    }

    const onSubmit = (e) =>{
        e.preventDefault()
        console.log('잘되는 중');
    }


    return(
        <>
        <li>
            <form onSubmit={onSubmit}>
            <input type="text" 
            onChange ={change}
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