import React from 'react'

const comment = () => {
    const [state, setState] = React.useState('')
    const [list, setList] = React.useState([])

    const onSubmit = (e) => {
        e.preventDefault()
        setList(list)
        console.log(e.target);
    }

    const onChange = (e) => {
      
        const {value} = {...e.target}
        console.log(value);
      //  setList(e.target.value)
    }

    return (
        <>
            <form onSubmit={onSubmit}>
                <input type="text" onChange={onChange} />
                <button type="submit">입력</button>
            </form>

            <ul>
                {list.map((v,k)=>{
                    <li key={k}>v</li>
                })}
                <li></li>
            </ul>
        </>
    )
}


export default comment