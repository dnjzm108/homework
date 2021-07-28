import FormLayout from "../components/FormLayout"
import Head from 'next/head'
import useInput from '../hooks/useInput'
import {useState} from 'react'

const Join = () => {
    const username = useInput('')
    const userid = useInput('')
    const password = useInput('')
    const userPhone = useInput('')

    const [passwordCheck,setPasswordCheck] = useState('')
   const [passwordError,setPasswordError] = useState(false)

   const handlePassword = e =>{
       const {value} = {...e.target}
       setPasswordError(password.value !== value)
       setPasswordCheck(value)
   }

   const [term,setTerm] = useState(false)
   const [termError,setTermError] = useState(false)

   const handleTerm = e =>{
       setTermError(e.target.checked !==true)
       setTerm(!term)
   }

    const handleSubmit = e =>{
        e.preventDefault()

        if(password.value !== passwordCheck){
            setPasswordError(true)
            return;
        }else{
            setPasswordError(false)
        }
        if(!term){
            setTermError(true)
            return;
        }

        console.log({
            userid:userid.value,
            username:username.value,
            password:password.value,
            userPhone:userPhone.value});
    }
    
    return (
        <>
            <Head>
                <title>Blog | 회원가입</title>
            </Head>
            <FormLayout>
                <>
                    <h2>회원가입</h2>
                    <form onSubmit={handleSubmit}>
                        <input type="text" {...userid} placeholder="아이디를 입력해주세요" /><br />
                        <input type="text" {...username} placeholder="이름를 입력해주세요" /><br />
                        <input type="password" {...password} placeholder="패스워드를 입력해주세요" /><br />
                        <input type="password" value={passwordCheck} onChange={handlePassword} placeholder="패스워드를 입력해주세요" /><br/>
                        { passwordError && <div style={{color:'red'}}>비밀번호가 다릅니다</div>}              
                        <input type="text" {...userPhone} placeholder="전화번호를 입력해주세요" /><br />
                        <input type="checkbox" id="term" onChange={handleTerm} checked={term} /> 
                        <label htmlFor="term">약관에 동의해주셈</label> 
                        {termError && <div style={{color:'red'}}>약관에 동의해 주세요!!</div>}
                         <br/>
                        <button type="submit">회원가입</button>
                    </form>
                </>

            </FormLayout>
        </>
    )
}

export default Join