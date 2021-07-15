import React from 'react'

const initalState = {
    loadding:false,
    commentItem : [],
    error:null
}

const Store = React.createContext(initalState)  //defualt  
//이것도 하나의 컴포먼트라서 변수에 담음

export default Store