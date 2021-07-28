import FormLayout from "../components/FormLayout"
import Head from 'next/head'
import {useState} from 'react'
import Router from 'next/router'
import useInput from '../hooks/useInput'



const Login = () => {
    const userid = useInput('') // Object
    const userpw = useInput('') // Object

    const handleSubmit = e => {
        e.preventDefault()

        userid.value === "web7722" && userpw.value === "1234"
        ? Router.push('/')
        : alert('아이디와 패스워드가 다릅니다.')
    }

    return (
        <>
            <Head>
                <title>Blog | 로그인</title>
            </Head>
            <FormLayout>
                <h2>로그인</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" {...userid} placeholder="아이디를입력해주세요." />
                    <input type="password" {...userpw} placeholder="패스워드를 입려해주세요."/>
                    <button type="submit">로그인</button>
                </form>
            </FormLayout>
        </>
    )
}

/*

value="ok"
{...{"value":"ok"}}
{
value:"ㅁㄴㅇㄻㄴㅇㄹ"
onChange:()=>{alert(1)}
}

value="ㅁㄴㅇㄻㄴㅇㄹ" onChange=()=>{alert(1)}
*/
export default Login