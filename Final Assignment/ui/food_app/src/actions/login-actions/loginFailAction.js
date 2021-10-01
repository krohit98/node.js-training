import actionTypes from "./loginActionTypes";

const loginFailAction = (data) =>{
    return(
        {
            type:actionTypes.LOGIN_FAIL,
            user_name:null,
            user_id:null,
            user_token:null,
            error:data.error
        }
    )
}

export default loginFailAction;