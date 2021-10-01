import actionTypes from "./loginActionTypes";

const loginSuccessAction = (data) =>{
    return(
        {
            type:actionTypes.LOGIN_SUCCESS,
            user_name:data.user_name,
            user_id:data.user_id,
            user_token:data.user_token,
            error:null
        }
    )
}

export default loginSuccessAction;