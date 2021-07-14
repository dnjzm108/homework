
// dispatch 바꿀정보를 받아야 함 => action
//reducer 는 결국 상태값을 가져와야함.
//dispatch 바꿀정보를 받아야함 -> action
//결국 엔 리턴을 해주는데 무엇을 리턴하냐 state값 
const reducer = (state, action) => {
    switch (action.type) {
        case "CREATE":
            return {
                ...state,
                commentItem:[...state.commentItem,action.payload]
            }

        case "UPDATE":
            return state

        case "DELETE":
            return state

        default:
            return state

    }
}

export default reducer