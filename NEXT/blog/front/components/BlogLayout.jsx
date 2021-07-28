import Link from 'next/link'
import NavToggle from './NavToggle'

const BlogLayout =({children}) =>{
    return(
        <>
        <div className="header">
            {/* 로고와 메뉴*/}
            <h1>logo</h1>
            <ul>
                <li>
                    <Link href="/">
                        <a>HOME</a>
                    </Link>
                </li>
                <li>
                    <Link href="posts/post">
                        post
                    </Link>
                </li>
                <li>
                    <Link href="/login">
                        login
                    </Link>
                </li>
                <li>
                    <Link href="/join">
                        join
                    </Link>
                </li>
            </ul>

            <NavToggle/>

        </div>

        <div className="conatiner">
            {children}

        </div>

        <div className="footer">
            copyright &copy; all reserved
        </div>
        </>
    )
}
export default BlogLayout