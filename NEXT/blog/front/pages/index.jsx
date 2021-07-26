import BlogLayout from "../components/BlogLayout"
import Head from 'next/head'

const Index = () => {

    return (
        <>
        <Head>
            <title>blog</title>
        </Head>
            <BlogLayout>
                hellow world
            </BlogLayout>

            <div>
                {
                    /*
                    public
                    ->location:3001/app/100.jpg
                    ->localhost:3001/1.jpg
                    */
                }
                <img src="/aa.png"/>
            </div>
        </>
    )
}

export default Index