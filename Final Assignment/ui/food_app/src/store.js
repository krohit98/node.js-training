import {createStore, applyMiddleware, combineReducers} from 'redux';

// importing reducers
import restaurantsReducer from './reducers/restaurantsReducer';
import loginReducer from './reducers/loginReducer';

// importing middlewares
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

//importing sagas
import restaurantWatcherSaga from './sagas/restaurantsSaga';
import loginWatcherSaga from './sagas/loginSaga';

const sagaMiddleware = createSagaMiddleware();

const store=createStore(
    combineReducers({
        restaurants: restaurantsReducer,
        login: loginReducer,
    }), applyMiddleware(sagaMiddleware, logger)
)

sagaMiddleware.run(restaurantWatcherSaga);
sagaMiddleware.run(loginWatcherSaga);

export default store;