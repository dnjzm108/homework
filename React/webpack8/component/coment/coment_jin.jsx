import React from 'react'


const ComponentForm = (props) => {
    return (
        <>
            <li className="comment-form">
                <form onSubmit={props.onSubmit}>
                    <h4>댓글쓰기 <span>{props.length}</span></h4>
                    <span className="ps_box">
                        <input type="text" name="comment_content" placeholder="댓글내용을 입력해주세요." className="int" />
                    </span>
                    <input type="submit" value="등록" className="btn" />
                </form>
            </li>
        </>
    )
}


const ComponentRow = (props) => {
    return (
        <>
            <li>
                <ul className="comment-row">
                    <li className="comment-id">{props.userid}</li>
                    <li className="comment-content">{props.content}</li>
                    <li className="comment-date">{props.date}</li>
                </ul>
            </li>
        </>
    )
}

const CommentApp  = () => {

let [state , setState] = React.useState({
        comments: [
            { userid: 'web7722', content: "안녕하세요aaaaa", date: "2021.06-03" },
            { userid: 'web7722', content: "안녕하세요wwww", date: "2021.06-03" },
            { userid: 'web7722', content: "안녕하세요", date: "2021.06-03" },
            { userid: 'web7722', content: "안녕하세요", date: "2021.06-03" },
            { userid: 'web7722', content: "안녕하세요", date: "2021.06-03" }
        ]
    })



let onSubmit = (e) => {
    e.preventDefault()
    let input = e.target.querySelector('.int').value;
    let obj = { userid: 'web7722', content:input, date: "2021.06-03" }
    let {comments} = { ...state }
    comments.push(obj);
    setState({ comments:comments })
    e.target.reset()
}

let renderRow = () => {
    let { comments } = { ...state }
    return (
        comments.map((value,key) => {
            return (
                <ComponentRow
                    key={key}
                    userid={value.userid}
                    content={value.content}
                    date={value.date}
                />
            )
        })
    )
}

    return (
            <ul className="comment">
                <ComponentForm
                     length={state.comments.length}
                     onSubmit={onSubmit} />
              {renderRow()}
             </ul>
        
    )

}



export default CommentApp