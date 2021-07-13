import React from 'react'

export const LayoutContext = Teact.createContext()

const LayoutStore = (props) =>{
    const user ={
        userid : 'web7722',
        username : 'jin',
        job : 'test'
    }
    return (
        <LayoutContext.Provider value = {uesr}>
            {props.children}
        </LayoutContext.Provider>
    )
}

export default LayoutStore