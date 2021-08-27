import wrapper from '../Providers/createCtx'
import { GET_POST } from '../reducers/post'
import {END} from 'redux-saga'
import {useSelector,useDispatch} from 'react-redux'
import { useEffect } from 'react'
import Link from 'next/link'

const posts = () =>{
    const dispatch = useDispatch()
    const {posts} = useSelector(state=>state.post)
    const postLink=posts.map((v,k)=>{
        return(
            <li key={k}>
                {/* <h2><Link href="/posts/[id]" as={`/posts/${v.id}`}><a>{v.title}</a></Link></h2> */}
                <h2><Link href={`/posts/${v.id}`}><a>{v.title}</a></Link></h2>
                <span>{v.body}</span>
            </li>
        )
    })
    useEffect(()=>{
        function scrollFn(){
            //window.scrollY 스크롤 위치
            //document.documentElement.clientHeight 눈에 보이는 높이
            //document.documentElement.scrollHeight 총 높이
            if((window.scrollY + document.documentElement.clientHeight) === document.documentElement.scrollHeight){
                dispatch(GET_POST())
            }
        }
        window.addEventListener('scroll',scrollFn)
        return()=>{
            window.removeEventListener('scroll',scrollFn)
        }
    },[])
    return(
        <>
        <h1>Posts ({posts.length})</h1>
        <ul>
            {postLink}
        </ul>
        </>
    )
}
export const getServerSideProps = wrapper.getServerSideProps( (Store)=>async(req,res)=>{
//첫번째는 dispatch를 써서 API 요청을 보낸다 그리고 상태를 변경시킨다.
Store.dispatch(GET_POST())
Store.dispatch(END)
await Store.sagaTask.toPromise()
})

export default posts