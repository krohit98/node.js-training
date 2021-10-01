const initialState={
    fetching:false,
    restaurants:[],
    error:null
}

const restaurantsReducer = (state=initialState, action) =>{
    switch(action.type){
        case 'RESTAURANTS_REQUEST':
            return {...state, fetching:true, error:null}

        case 'RESTAURANTS_SUCCESS':
            return {...state, fetching:false, restaurants:action.restaurants}

        case 'RESTAURANTS_FAIL':
            return{...state, fetching:false, restaurants:null, error:action.error}

        default:
            return state
    }
}

export default restaurantsReducer;