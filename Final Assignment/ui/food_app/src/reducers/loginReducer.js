const initialState={
    fetching:false,
    user_name:null,
    user_id:null,
    user_token:null,
    error:null
}

const loginReducer = (state=initialState, action) =>{
    switch(action.type){
        case 'LOGIN_REQUEST':
            return {...state, fetching:true, error:null}

        case 'LOGIN_SUCCESS':
            return {...state, fetching:false, user_name:action.user_name, user_id:action.user_id, user_token:action.user_token}

        case 'LOGIN_FAIL':
            return {...state, fetching:false, user_name:null, user_id:null, user_token:null, error:action.error}

        case 'LOGOUT':
            return initialState

        default:
            return state
    }
}

export default loginReducer;