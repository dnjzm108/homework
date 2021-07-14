import React from 'react'
import CommentLayout from './CommentLayout'
import CommentForm from './CommetForm'
import CommentList from './CommentList'

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