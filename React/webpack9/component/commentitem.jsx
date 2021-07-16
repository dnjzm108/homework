import React from 'react'

const CommentItem = ({userid,content,date}) =>{
    return(
        <>
        <ul>
            <li>{userid}</li>
            <li>{content}</li>
            <li>{date}</li>
        </ul>
        </>
    )
}

export default CommentItem