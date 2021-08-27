const initialState ={
    user:{
        isLogin:false
    },
    post : {

    },

   
}

const USER_LOGIN = "USER_LOGIN"
const USER_LOGOUT = "USER_LOGOUT"

export const USER_LOGIN_ACTION =data =>{
    return{
        type: USER_LOGIN,
        data,
    }
}

const reducer = (state = initialState , action ){
    switch(action.type){
        case USER_LOGIN:
        return {
            ...state,
            user:{
                ...state.user,
                IsLogin:false
            }
        
        }
        case USER_LOGOUT:
            return state
            user:{
                
            }
        default:
            return state
    }

}

export default reducer