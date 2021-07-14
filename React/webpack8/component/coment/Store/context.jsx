import React from 'react'

const initalState = {
    commentItem : [
        {userid:'web7722' , content : '안녕하세요' , date:'2021-07-01'}
    ]
}

const Store = React.createContext(initalState)  //defualt  
//이것도 하나의 컴포먼트라서 변수에 담음

export default Store