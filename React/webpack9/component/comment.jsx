import React from 'react'
import CommentLayout from './commentlayout'
import CommentList from './commentlist'
import CommentForm from './commentform'

const Comment = () => {

    return (
        <>
            <CommentLayout>
                <CommentList />
                <CommentForm />
            </CommentLayout>
        </>
    )
}


export default Comment