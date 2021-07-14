import React from 'react'
import LayoutStore, { LayoutContext } from './layoutContext'

const Layout = () => {
    return (
        <>
            <LayoutStore>
                <LoginBox></LoginBox>
            </LayoutStore>

        </>
    )
}

const LoginBox = () => {
    return (
        <Login />
    )
}

const Login = () => {
    return (
        <Button />
    )
}

const Button = () => {
    const context = React.useContext(LayoutContext)
    return (
        <>
            <button>나는 버튼이야</button>

            <ul>
                <li></li>
            </ul>
        </>
    )
}



export default Layout