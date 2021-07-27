import FormLayout from "../components/FormLayout"
import Head from 'next/head'
import Router from "next/router"

import {useState} from 'react'

const useInput = (defaultValue) =>{
    const [value,setValue] = useState(defaultValue)
    const onChange = e =>{
        const {value} = {...e.target}
        setValue(value)
    }
    return{
        value,
        onChange
    }
}

const login = () => {

    const userid = useInput('')
    const userpw = useInput('')

    const handleSubmit =e =>{
        e.preventDefault()
        // console.log(userid,userpw);
    userid.value === "web7722" && userpw.value ==="1234"
    ? Router.push('/')
    : alert('아이디와 패스워드가 다릅니다.')
    }

    // const [userid,setUserid] = useState('');
    // const [userpw,setUserpw] = useState('');

    // const ChangUserid = e =>{
    //     const {value} = {...e.target}
    //     setUserid(value)
    // }
    // const ChangUserpw = e =>{
    //     const {value} = {...e.target}
    //     setUserpw(value)
    // }
    // const handleSubmit = e =>{
    //     e.preventDefault()
    //     console.log(userid,userpw);
    //     setUserid('')
    //     setUserpw('')
    // }

    return (
        <>
        <title>blog | 로그인</title>
            <FormLayout>
                <h2>로그인</h2>

                <form onSubmit={handleSubmit}>
                    <input
                     type="text"
                     {...userid}
                     placeholder="아이디를 입력해주세요"
                    //  value={userid}
                      />
                    <input
                     type="password" 
                     {...userpw}
                      placeholder="비밀번호를 입력해주세요"
                    //   value={userpw}
                       />
                    <button type="submit">로그인</button>
                </form>
            </FormLayout>
        </>
    )
}

export default login