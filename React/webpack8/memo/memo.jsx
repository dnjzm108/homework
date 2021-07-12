import React, { useState,useMemo,useCallback } from 'react'

const Memo = () => {
    // 상태값 하는 input , 내용 저장을 위한거 
    const [username, setUsername] = useState('')
    const [list, setList] = useState([])

    const change = e => {
        let { value } = { ...e.target }
        setUsername(value)
    }
    const submit = e => {
        e.preventDefault()
        //불변성
        const newList = [...list]
        //const newList = list.slice()
        newList.push(username)
        setList(newList)
        setUsername('')
    }

    const renderList = () => {
        // let newArr = []
        // for(let i = 0; i < list.length; i++){
        //     //list[i]
        //     newArr.push(<li key={i}>{list[i]}</li>)

        // let newArr = list.map((v.k)=>{
        //     return <li key={k}>{v}</li>
        // })

        //  }
        // return newArr
        return (
            list.map((v, k) => {
                return <li key={k}>{v}</li>
            })
        )
    }

    const count = () => {
        return list.length
    }
    const userCount = useMemo(()=>{
        console.log('count');
        return list.length
    },[list.length])

    return (
        <>
            <h2>회원 리스트({userCount()})</h2>
            <form onSubmit={submit}>
                <input type="text" name="username"
                    value={username}
                    onChange={change}
                />
                <button type="submit">
                    추가
                </button>
            </form>
            <ol>
                {renderList()}
            </ol>
        </>
    )
}

export default Memo