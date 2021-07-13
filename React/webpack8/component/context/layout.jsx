import React from 'react'
import LayoutStore,{LayoutContext} from './layoutContext'

const Layout = () => {
    return (
        <>
            <LayoutStore>
                <LoginBox />
            </LayoutStore>
        </>
    )
}

const LoginBox = () => {
    return (
        <>
            <Login />
        </>
    )
}
const Login = () => {
    return (
        <>
            <Button />
        </>
    )
}

const Button = () => {
    const context =React.useContext(LayoutContext)
    return (
        <>
        <button> {context.userid}aa</button>
        <ul>
            <li>{context.userid}</li>
            <li>{context.username}</li>
            <li>{context.job}</li>

        </ul>
        asdfasdf
        </>
    )
}

export default Layout