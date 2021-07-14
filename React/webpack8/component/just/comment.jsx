import React from 'react'
import CommentLayout from './commentLayout'
import CommentForm from './commentForm'
import CommentList from './commentList'

const Comment = () =>{
    return(
        <>
        <CommentLayout>
            <CommentForm />
            <CommentList />
        </CommentLayout>
        </>
    )
}


export default Comment