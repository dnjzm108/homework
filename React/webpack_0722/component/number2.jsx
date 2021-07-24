import React from 'react'

// const Number2 = () =>{
//     const [state,setState] = React.useState('')

//     const onChange = (e) =>{
//        setState(Number(e.target.value))
//     }

//     const onUp = () =>{
//         setState(state+1)
//     }
//     const onDown = () =>{
//         setState(state-1)
//     }
//     return(
//         <>
//        <input type="number" onChange={onChange} value={state} />
//        <button onClick={onUp}>+1</button>
//        <button onClick={onDown}>-1</button>
//         </>
//     )
// }



// const Number2 = () =>{

// const[state,setState] = React.useState('')

// const onChange = (e) =>{
//     setState(Number(e.target.value))
// }
// const onUp=()=>{
//     setState(state+1)
// }
// const onDown = () =>{
//     setState(state-1)
// }

//     return(

//         <>
//         <input type="number" onChange={onChange} value={state} />
//         <button onClick={onUp}>+1</button>
//         <button onClick={onDown}>-1</button>
//         </>
//     )
// }




// const Number2 = () =>{
// const [state,setState] = React.useState('')

// const onChange = (e)=>{
//     setState(Number(e.target.value))
// }
// const onUp = () =>{
//     setState(state+1)
// }
// const onDown = ()=>{
//     setState(state-1)
// }


//     return(

//         <>
//         <input type="number" onChange={onChange} value={state} />
//         <button onClick={onUp}>+1</button>
//         <button onClick={onDown}>-1</button>
//         </>
//     )
// }





// const Number2 =()=>{

//     const [state,setState]= React.useState('')

//     const onChange =(e) =>{
//         setState(Number(e.target.value))
//     }
//     const onUp = () =>{
//         setState(state+1)
//     }
//     const onDown = () =>{
//         setState(state-1)
//     }


//     return(
//         <>
//         <input type="number" onChange={onChange} value={state} />
//        <button onClick={onUp}>+1</button>
//        <button onClick={onDown}>-1</button>
       
//         </>
//     )
// }




const Number2 = () =>{

const [state,setState] = React.useState('')

const onChange = (e) =>{
    setState(Number(e.target.value))
}
const onUp = () =>{
    setState(state+1)
}
const onDown = () =>{
    setState(state-1)
}

    return(
        <>
        <input type="number" onChange={onChange} value={state} />
        <button onClick={onUp}>+1</button>
        <button onClick={onDown}>-1</button>
        </>
    )
}




export default Number2