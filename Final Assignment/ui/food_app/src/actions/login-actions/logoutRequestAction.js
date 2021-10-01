import actionTypes from './loginActionTypes';

const logoutRequestAction = () =>{
    return(
        {
            type:actionTypes.LOGOUT
        }
    )
}

export default logoutRequestAction;