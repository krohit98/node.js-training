import actionTypes from "./restaurantsActionTypes";

const restaurantsRequestAction = () =>{
    return(
        {
            type: actionTypes.RESTAURANTS_REQUEST,
            restaurants: null,
            error:null
        }
    )
}

export default restaurantsRequestAction;