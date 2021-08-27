import Link from 'next/link'
import NavToggle from './NavToggle'
import Header from './layout/header'
import {useContext} from 'react'

const BlogLayout = ({ children }) => {

   
    return (
        <>

            <Header />
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