import Store from './store/context'
import { useContext,useEffect } from 'react'
import Router from 'next/router'

const logout = () => {

    const {dispatch} = useContext(Store)

    useEffect(()=>{
        dispatch({type:'LOGOUT'})

        setTimeout(()=>{
            Router.back()
        },1000)
    },[])

    return (
        <>
            logout....
        </>
    )
}

export default logout