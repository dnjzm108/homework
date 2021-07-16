import React from 'react'
import CommentItem from './commentItem'

const CommentList = () => {

    const Arr = [
        { userid: "web77221", content: "안녕하세요1", date: "2021-07-14" },
        { userid: "web77222", content: "안녕하세요2", date: "2021-07-14" },
        { userid: "web77223", content: "안녕하세요3", date: "2021-07-14" },
        { userid: "web77224", content: "안녕하세요4", date: "2021-07-14" },
        { userid: "web77225", content: "안녕하세요5", date: "2021-07-14" }
    ]

    const item = Arr.map( (v, k) => {
        return (
            <>
                 <CommentItem
                        userid={v.userid}
                        content={v.content}
                        date={v.date}
                    />
            </>
        )
    })

    return item
}


export default CommentList