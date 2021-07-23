import React from 'react'

// const Number = () =>{

//     <h1> Counter easy </h1>
//     const [state,setState] = React.useState(0)

//     const onUp = () =>{
//         setState(state+1)
//     }
//     const onDown = () =>{
//         setState(state-1)
//     }

//         return (
//             <>
//           <input type="number" value={state}/>
//           <button onClick={onUp}>+1</button>
//           <button onClick={onDown}>-1</button>
//             </>
//         )
// }


// const Number = () =>{
// const [state,setState] = React.useState(0)

// const onUp = () =>{
//     setState(state+1)
// }
// const onDown = () =>{
//     setState(state-1)
// }

//     return(
//         <>

//         <input type="number" value={state} />
//         <button onClick={onUp}>+1</button>
//         <button onClick={onDown}>-1</button>
//         </>
//     )
//}




// const Number2 = () =>{
// const [state,setState] = React.useState('')

// const onChange = (e) =>{
//     setState(e.target.value)
// }
// const onUp = () =>{
//     setState(state+1)
// }
// const onDown = () =>{
//     setState(state-1)
// }

//     return(

//         <>

//         <input type="number" value={state} onChange={onChange}/>
//         <button onClick={onUp}>+1</button>
//         <button onClick={onDown}>-1</button>
//         </>

//     )
// }

const App = () =>{
const [input,setInput] = React.useState('')
const [list,setList] = React.useState([])

const Change = (e) =>{
    const {value} = {...e.target}
    setInput(value)
}

const Submit = (e) =>{
    e.preventDefault()
    list.push(input)
    setList(list)
    setInput('')
}
    return(
        <>
        <form onSubmit={Submit}>

            <input type="text"  onChange={Change} />
            <button type="submit">등록</button>
        </form>

        <ul>
            {
                
            }
        </ul>
        </>
    )
}


export default App