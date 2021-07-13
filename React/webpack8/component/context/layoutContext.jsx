import React from 'react'

export const LayoutContext = React.createContext()  //Component

const LayoutStore = (props) => {
    const user = {
        userid :'web7722',
        username : 'jin',
        job:'programer'

    }

    return (
        <LayoutContext.Provider value={user}>
            {props.children}
        </LayoutContext.Provider>
       
    )
}
//npm install styled-component

export default LayoutStore