import { useRouter } from 'next/router'
import BlogLayout from "../../components/BlogLayout"
import Head from 'next/head'

const Post = () => {
    const router = useRouter()
    const { post } = router.query

    return (
        <>
          <Head>
            <title>blog | post</title>
        </Head>
            <BlogLayout>
                {post} 페이지 입니다.
            </BlogLayout>
        </>
    )
}

export default Post