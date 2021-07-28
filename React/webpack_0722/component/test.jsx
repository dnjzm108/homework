const App = () => {

    const [lnput, setInput] = React.useState('')
    const [list, setList] = React.useState([])

    const Change = (e) => {
        const { value } = { ...e.target }
        setInput(value)
    }
    const Submit = (e) => {
        e.preventDefault()
        list.push(input)
        setList(list)
        setInput('')
    }


    return (
        <>
            <form onSubmit={Submit}>
                <input type="text" onChange={Change} value={input} />
                <button type="submit">등록</button>
            </form>

            <ul>
                {
                    list.map((v, k) => {
                        return <li key={k}>{v}</li>
                    })
                }
            </ul>
        </>
    )
}


const App = () => {
    const [input, setInput] = React.useState('')
    const [list, setList] = React.useState([])

    const Change = (e) => {
        const { value } = { ...e.target }
        setInput(value)
    }

    const Submit = (e) => {
        e.preventDefault()
        list.push(input)
        setList(list)
        setInput('')
    }

    return (
        <>
            <form onSubmit={Submit}>
                <input type="text" onChange={Change} value={input} />
                <button>등록</button>
            </form>

            <ul>
                {
                    list.map((v, k) => {
                        <li key={k}>v</li>
                    })
                }

            </ul>

        </>
    )
}



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
        <form onSubmit = {Submit}>
            <input type="text"value={input} onChange={Change} />
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