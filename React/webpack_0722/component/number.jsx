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


const Number = () =>{
const [state,setState] = React.useState(0)

const onUp = () =>{
    setState(state+1)
}
const onDown = () =>{
    setState(state-1)
}

    return(
        <>

        <input type="number" value={state} />
        <button onClick={onUp}>+1</button>
        <button onClick={onDown}>-1</button>
        </>
    )
}




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



export default Number