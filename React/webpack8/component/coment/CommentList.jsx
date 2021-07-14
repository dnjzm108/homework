import React,{useContext} from 'react'
import CommentItem from './Commentitem'
import Store from './Store/context'

const CommentList = () => {

     const {state} = useContext(Store)
     const list =state.commentItem
    const Item = list.map((v, k) => {
        return (
            <CommentItem
                key={k}
                userid={v.userid}
                content={v.content}
                date={v.date}
            />
        )
    })
    return (
        <>
            <li>
                {Item}
            </li>
        </>
    )
}


export default CommentList