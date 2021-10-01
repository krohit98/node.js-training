import actionTypes from "./restaurantsActionTypes";

const restaurantsFailAction = (data) =>{
    return(
        {
            type: actionTypes.RESTAURANTS_FAIL,
            restaurants: null,
            error:data.error
        }
    )
}

export default restaurantsFailAction;