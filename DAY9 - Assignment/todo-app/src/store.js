import {createStore} from 'redux';
import data from './data/data.json';
import taskReducer from './reducers/taskReducer';

function configureStore(state={tasks:data}){
    return createStore(taskReducer, state);
}

export default configureStore;