
// dispatch 바꿀정보를 받아야 함 => action
//reducer 는 결국 상태값을 가져와야함.
//dispatch 바꿀정보를 받아야함 -> action
//결국 엔 리턴을 해주는데 무엇을 리턴하냐 state값 
const reducer = (state, action) => {
    switch (action.type) {
        case"GET_COMMENT":
        console.log('GET_COMMENT');
        return{
            ...state,
            loadding:true,
        }
        case "GET_COMMENT_SUCCESS":
            console.log('GET_COMMENT_SUCCESS');
            return {
                ...state,
                loadding:false,
                commentItem:action.payload,
            }

        case "GET_COMMENT_ERROR":
            console.log('GET_COMMENT_ERROR');
            return {
                ...state,
                loadding:false,
                error:action.payload
            }

       
        case "CREATE":
            return {
                ...state,
                commentItem: [...state.commentItem, action.payload]
            }

        case "UPDATE":
            console.log(action);
            // let content = action.payload.content;
            // let index = action.payload.index
            // let {payload:{content,index}} = action  똑같은 구문

            let { content, index } = { ...action.payload }
            let { commentItem } = { ...state }
            commentItem[index].content = content
            return {
                ...state,
                commentItem
            }

            // let content = action.payload.content;
            // let index = action.payload.index;
            // let commentItem = state.commentItem
            // console.log(commentItem);
            // console.log(commentItem[index]); //index 값이 무엇을 의미하는지
            // console.log(commentItem[index].content); //여기서 쓰는  content 는 뭔지
            // console.log(content);
            // commentItem[index].content = content
            // return {
            //     ...state,
            //     commentItem: [...commentItem]
            // }

        case "DELETE":
            console.log('인덱스야 왔니?', action.payload);
            console.log(state.commentItem);
            let newArr = []
            for (let i = 0; i < state.commentItem.length; i++) {
                if (i !== action.payload) newArr.push(state.commentItem[i])
            }
            console.log(newArr, state.commentItem);
            //newArr = 내가 원하는 값을 삭제하고 남은 배열값
            //state.commentItem = 내가 기존에 가지고 있었던 배열값
            return {
                ...state,
                commentItem: newArr
                //commentItem:[...state.commentItem.filter((v,k)=>action.payload !== k)]
            }


        default:
            return state

    }
}

export default reducer