import React from 'react'

// const comment = () => {
//     const [state, setState] = React.useState('')
//     const [list, setList] = React.useState([])

//     const onSubmit = (e) => {
//         e.preventDefault()
//         setList(list)
//         console.log(e.target);
//     }

//     const onChange = (e) => {

//         const {value} = {...e.target}
//         console.log(value);
//         setList(e.target.value)
//     }

//     return (
//         <>
//             <form onSubmit={onSubmit}>
//                 <input type="text" onChange={onChange} />
//                 <button type="submit">입력</button>
//             </form>

//             <ul>
//                 {list.map((v,k)=>{
//                     <li key={k}>v</li>
//                 })}
//                 <li></li>
//             </ul>
//         </>
//     )
// }



// const comment = () =>{

// const [list,setList] = React.useState('')
// const [input,setInput] = React.useState([])

// const Change = (e) =>{
//    const {value} ={...e.target}
//    setList(value)
// }

// const onSubmit = (e) => {
//     e.preventDefault()
//     input.push(list)
//     setInput(input)
//     setList('')
// }

//     return(
//         <>
//         <form onSubmit={onSubmit}>
//             <input onChange={Change} type="text" value={list} />
//             <button type="submit">등록</button>
//         </form>

//         <ul>
//             {
//                 input.map((v,k)=>{
//                     return <li key={k}>{v}</li>
//                 })
//             }
//         </ul>
//         </>
//     )
// }



// const comment = () => {

//     const [list, setList] = React.useState([])
//     const [input, setInput] = React.useState('')

//     const onSubmit = (e) => {
//         e.preventDefault()
//         list.push(input)
//         setList(list)
//         setInput('')

//     }
//     const onChange = (e) => {
//         const { value } = { ...e.target }
//         setInput(value)
//     }

//     return (
//         <>
//             <form onSubmit={onSubmit}>
//                 <input type="text" onChange={onChange} value={input} />
//                 <button type="submit">등록</button>
//             </form>

//             <ul>
//                 {
//                     list.map((v, k) => {
//                        return <li key={k}>{v}</li>
//                     })
//                 }
//             </ul>
//         </>
//     )
// }



// const comment = ()=>{

//     const [list,setList] = React.useState([])
//     const [input,setInput] = React.useState('')

//     const onSubmit = (e) =>{
//         e.preventDefault()
//         list.push(input)
//         setList(list)
//         setInput('')
//     }
//     const onChange=(e)=>{
//         const{value} = {...e.target}
//         setInput(value)
//     }

//     return(
//         <>
//         <form onSubmit={onSubmit}>
//         <input type="text"value={input} onChange={onChange} />
//         <button type="submit">뜽록</button>
//         </form>

//         <ul>
//             {
//                 list.map((v,k)=>{
//                     return <li key={k}>{v}</li>
//                 })
//             }
//         </ul>
//         </>
//     )
// }



// const comment = () => {

//     const [list, setList] = React.useState([])
//     const [input, setInput] = React.useState('')

//     const onSubmit = (e) => {
//         e.preventDefault()
//         list.push(input)
//         setList(list)
//         setInput('')
//     }
//     const onChange = (e) => {
//         const { value } = { ...e.target }
//         setInput(value)
//     }

//     return (

//         <>
//             <form onSubmit={onSubmit}>
//                 <input type="text" value={input} onChange={onChange} />
//                 <button type="submit">등록</button>
//             </form>

//             <ul>

//                 {
//                     list.map((v, k) => {
//                         return <li key={k}>{v}</li>
//                     })
//                 }
//             </ul>
//         </>
//     )
// }



// const comment = () => {
// const[list,setList] = React.useState([])
// const [input,setInput] = React.useState('')

// const onSubmit = (e) =>{
// e.preventDefault()
// list.push(input)
// setInput('')
// } 

// const onChange = (e) =>{
//     const {value} = {...e.target}
//     setInput(value)
// }


//     return (

//         <>
//             <form onSubmit={onSubmit}>
//                 <input type="text" value={input} onChange={onChange} />
//                 <button type="submit">등록</button>
//             </form>

//             <ul>
//                 {
//                     list.map((v,k)=>{
//                         return(
//                             <li key={k}> {v}</li>
//                         )
//                     })
//                 }
//             </ul>
//         </>

//     )
// }


// const comment = () => {

// const [list,setList] = React.useState([])
// const [input,setInput] = React.useState('')
// const onSubmit = (e) =>{
//     e.preventDefault()
//     list.push(input)
//     setList(list)
//     setInput('')
// }
// const onChange = (e) =>{
//     const {value} = {...e.target}
//     setInput(value)
// }

//     return (
//         <>
//             <form onSubmit={onSubmit}>
//                 <input type="text" value={input} onChange={onChange} />
//                 <button type="submit">등록</button>
//             </form>

//             <ul>
//                 {
//                     list.map((v, k) => {
//                         return (
//                             <li key={k}>{v}</li>
//                         )
//                     })
//                 }
//             </ul>
//         </>
//     )
// }


// const comment = () =>{
// const [list,setList] = React.useState([])
// const [input,setInput] = React.useState('')

// const onChange = (e) =>{
//     const {value} ={...e.target}
//     setInput(value)
// }
// const onSubmit = (e) =>{
//     e.preventDefault()
//     list.push(input)
//     setInput('')
// }

//     return(
//         <>
//         <form onSubmit={onSubmit}>
//         <input type="text" value={input} onChange={onChange} />
//         <button type="submit">등록</button>
//         </form>
//         <ul>
//             {
//                 list.map((v,k)=>{
//                     return(
//                         <li key={k}>{v}</li>
//                     )
//                 })
//             }
//         </ul>
//         </>
//     )
// }


// const comment = () =>{
// const initalState ={
//     input:'',
//     list:[],
//     visible:Infinity
// }

// const [state,dispatch] = React.useReducer(reducer,initalState)
// const [content,setContent] = React.useState('')

// const handleChange = (e) =>{
//     const {value} = {...e.target}
//     dispatch({type:'CHANGE',payload:value})
// }
// const handleSubmit = (e) =>{
//     e.prevevtDefault()
//     dispatch({type:'SUBMIT'})
// }
// const handleClick = index=>{
//     dispatch({type:'DELETE',payload:{index}})
//     setContent(state.list[intex])
// }
// const visibleChange = (e) =>{

// }


//     return(

//         <>
// <form onSubmit={handleChange}>
// <input type="text" onChange={} />


// </form>

//         </>

//     )
// }

const comment = () =>{

    const [list,setList] = React.useState([])
    const [input,setInput] = React.useState('')

    const onSubmit =(e)=>{
        e.preventDefault()
        list.push(input)
        setList(list)
        setInput('')
    }
    const onChange = (e) =>{
        const{value} = {...e.target}
        setInput(value)
    }

    return(
    <>
        <form onSubmit={onSubmit}>
            <input type="text" onChange={onChange} value={input} />
            <button type="submit">등록</button>
        </form>

        <ul>
            {
                list.map((v,k)=>{
                    return(
                        <li key={k}>{v}</li>
                    )
                })
            }
        </ul>
        </>
    )
}



export default comment