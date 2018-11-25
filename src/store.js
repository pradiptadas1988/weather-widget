import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import weatherReducer from './reducers/weatherDataReducer';

const rootReducer = combineReducers({weatherReducer});

const store = createStore(rootReducer,applyMiddleware(thunk));

export default store;
