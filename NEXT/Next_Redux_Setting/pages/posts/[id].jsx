import {useRouter} from 'next/router'
import wrapper from '../../Providers/createCtx'
import { GET_POSTS_DETAIL } from '../../reducers/post'
import {END} from 'redux-saga'
import { useSelector } from 'react-redux'
import Link from 'next/link'

const Post = () =>{
    // const router = useRouter()
    // const {id} = router.query
    const post = useSelector(state => state.post.postDetail)
    return(
        <>
        hello 
        <h3>{post.title}</h3>
        <dl>
            <dt>{post.userId}</dt>
            <dt>{post.body}</dt>
        </dl>
        <Link href="/posts/"><a>목록가기</a></Link>
        </>
    )
}
export const getServerSideProps = wrapper.getServerSideProps( (Store)=>async(req,res)=>{
const {id} =req.params;
Store.dispatch(GET_POSTS_DETAIL(id))
Store.dispatch(END)
await Store.sagaTask.toPromise()
})

export default Post