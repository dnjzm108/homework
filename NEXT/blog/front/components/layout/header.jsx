import Link from 'next/link'
import NavToggle from '../NavToggle'
import Styled from 'styled-components'
import {useContext} from 'react'
import Store from  '../../pages/store/context'

const HeaderContainer = Styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:space-between;
    padding: 0 5vw;
    box-sizing:border-box;
    border-bottom:1px solid #ddd;
    width:100vw;
    height:10vh;
`
const Gnb = Styled.ul`
 display:flex;
flex-direction:row;

& > li {
    margiin-left : 20px
}

 @media only screen and (max-width:768px){
     display:none;

 }
 
`

const Header = () => {

    const globalStore = useContext(Store)
    const {IsLogin} = globalStore.state
   

    return (
        <HeaderContainer>
            {/* 로고와 메뉴*/}
            <h1>logo</h1>
            <Gnb>
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
                {
                    IsLogin ===false
                    ?
                    <>
                     <li><Link href="/login">login</Link></li>
                <li><Link href="/join">join </Link></li>
                    </>
                    :
                    <><li><Link href="/login">logout</Link></li>
                <li> <Link href="/join">mypage</Link></li>
                </>
                }
               
            </Gnb>

            <NavToggle />

        </HeaderContainer>
    )
}

export default Header