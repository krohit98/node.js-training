import {takeLatest, call, put} from 'redux-saga/effects';
import restaurantsSuccessAction from '../actions/restaurants-actions/restaurantsSuccessAction';
import restaurantsFailAction from '../actions/restaurants-actions/restaurantsFailAction';
import axios from 'axios';

export default function* restaurantWatcherSaga(){
    yield takeLatest("RESTAURANTS_REQUEST", workerSaga);
}

async function fetchRestaurants(){
    try{
        const response = await axios.get("http://localhost:5000/getListOfPlaces");
        return response;
    }
    catch(error){
        if(error.response)
            return error.response.data
        else
            return error.message
    }   
}

function* workerSaga(){
    try{
        const response = yield(call(fetchRestaurants))
        if(response.data){
            const restaurants = response.data;
            yield put(restaurantsSuccessAction({restaurants:restaurants}));
        }
        else
            yield put(restaurantsFailAction({error:response}))
    }
    catch(error){
        yield put(restaurantsFailAction({error:error}));
    }
}