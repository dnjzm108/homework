import React,{useContext} from 'react'
import CommentItem from './Commentitem'
import Store from './Store/context'

const CommentList = () => {

     const {state} = useContext(Store)
     const list =state.commentItem
     const {loadding,commentItem,error} = state

    const Item = list.map((v, k) => {
        return (
            <CommentItem
                key={k}
                userid={v.userid}
                content={v.content}
                date={v.date}
                index={k}
            />
        )
    })
    if(loadding) return <li>나 로딩중</li>;
    if(error) return <li>나 에러 나씀</li>
    return (
     
            <li>{Item}</li>
        
    )
}


export default CommentList