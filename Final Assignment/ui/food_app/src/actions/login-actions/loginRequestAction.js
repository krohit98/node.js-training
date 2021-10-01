import actionTypes from './loginActionTypes'

const loginRequestAction = (data) =>{
    return(
        {
            type:actionTypes.LOGIN_REQUEST,
            user_id:null,
            user_name:null,
            user_token:null,
            email:data.email,
            password:data.password,
            error:null
        }
    )
}

export default loginRequestAction;