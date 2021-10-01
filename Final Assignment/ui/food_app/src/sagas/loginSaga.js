import {takeLatest, call, put} from 'redux-saga/effects';
import loginSuccessAction from '../actions/login-actions/loginSuccessAction';
import loginFailAction from '../actions/login-actions/loginFailAction';
import axios from 'axios';

export default function* loginWatcherSaga(){
    yield takeLatest("LOGIN_REQUEST", workerSaga);
}

async function loginUser(email, password){
    try{
        const payload={email, password};
        const response = await axios.post("http://localhost:5000/login", payload);
        return response;
    }
    catch(error){
        if(error.response)
            return error.response.data
        else
            return error.message
    }
}

function* workerSaga(action){
    try{
        const response = yield(call(loginUser, action.email, action.password))
        if(response.data){
            const user_id = response.data.user._id;
            const user_name = `${response.data.user.firstName} ${response.data.user.lastName}`;
            const user_token = response.data.user.token;
            localStorage.setItem("user_token", user_token);
            yield put(loginSuccessAction({user_name:user_name, user_id:user_id, user_token:user_token}));
        }
        else
            yield put(loginFailAction({error:response}));
    }
    catch(error){
        yield put(loginFailAction({error:error}));
    }
}