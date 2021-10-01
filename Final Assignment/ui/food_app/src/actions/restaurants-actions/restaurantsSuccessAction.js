import actionTypes from "./restaurantsActionTypes";

const restaurantsSuccessAction = (data) =>{
    return(
        {
            type: actionTypes.RESTAURANTS_SUCCESS,
            restaurants: data.restaurants,
            error:null
        }
    )
}

export default restaurantsSuccessAction;