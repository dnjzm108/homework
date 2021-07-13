import React, { useState, useMemo, useCallback } from 'react'

const Memo = () => {
    // 상태값 하는 input, 내용저장을위한거
    const [username, setUsername] = useState()
    const [list, setList] = useState([])

    // const change = e => {
    //     let { value } = { ...e.target }
    //     setUsername(value)
    // }

    const change = useCallback((e) => {
        let { value } = { ...e.target }
        setUsername(value)
    })

    // const submit = e => {
    //     e.preventDefault()
    //     //불변성
    //     //얕은복사 하는게 목적

    //     const newList = [...list]
    //     //const newList = list.slice()
    //     newList.push(username)
    //     setList(newList)
    //     setUsername('')

    //     console.log('submit')
    // }

    const submit = useCallback( e => {
        e.preventDefault()
        //불변성
        //얕은복사 하는게 목적
        const newList = [...list]
        //const newList = list.slice()
        newList.push(username)
        setList(newList)
        setUsername('')
    }, [list, username])

    // const renderList = () => {
    //     // let newArr = []
    //     // for(let i = 0; i < list.length; i++ ) {
    //     //     list[i] // asdfasdf -> <li>asdfasdf</li>
    //     //     newArr.push(<li key={i}>{list[i]}</li>)
    //     // }
    //     let newArr = list.map( (v,k) => {
    //         return <li key={k}>{v}</li>
    //     })

    //     return newArr
    // }

    const renderList = useCallback(() => {
        let newArr = list.map((v, k) => {
            return (
                <li key={k}>{v}</li>
            )
        })
        return newArr
    },[list])

    const userCount = useMemo(() => {
        return list.length
    }, [list.length])

    return (
        <>
            {console.log('render')}
            <h2>회원리스트({userCount})</h2>
            <form onSubmit={submit}>
                <input
                    type="text"
                    name="username"
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