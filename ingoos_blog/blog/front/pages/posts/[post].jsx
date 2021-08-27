// /admin/:menu/
import {useRouter} from 'next/router'
import BlogLayout from "../../components/BlogLayout"
import Head from 'next/head'

const data =[
    {
        id:'1',
        subject:'ingoos blog',
        content:'html ',
        date:'2021-07-28',
        hit:'5'
    },
    {
        id:'1',
        subject:'ingoos blog',
        content:'html ',
        date:'2021-07-28',
        hit:'5'
    },
    {
        id:'1',
        subject:'ingoos blog',
        content:'html ',
        date:'2021-07-28',
        hit:'5'
    },
    {
        id:'1',
        subject:'ingoos blog',
        content:'html ',
        date:'2021-07-28',
        hit:'5'
    },
    {
        id:'1',
        subject:'ingoos blog',
        content:'html ',
        date:'2021-07-28',
        hit:'5'
    },
]


const Post = () => {
    const router = useRouter()
    const {post} = router.query
    // 카테고리 번호 DB idx id
    //server 요청해서 id 관련된 게시물들을 가져올수있도록
    /*
    게시번호
    제목
    날짜
    조회수
    */

    const list = data.map((v)=>{
        return(
            <div key={v.id}>
                <ul>
                    <li>{v.subject}</li>
                    <li>{v.content}</li>
                    <li>{v.date}</li>
                </ul>
            </div>
        )
    })
    
    return (
        <>
            <Head>
                <title>Blog | 리스트</title>
            </Head>
            <BlogLayout>
                {post} 리스트
                <div>
                    {list}
                </div>
            </BlogLayout>
        </>
    )
}

export default Post