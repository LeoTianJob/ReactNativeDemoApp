import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import { createStore, applyMiddleware, combineReducers } from 'redux';

import loginUser from './reducers/loginUser';
import userTodo from './reducers/userTodo'

const rootReducer = combineReducers({
    loginUser,
    userTodo
})

const client = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
    responseType: 'json'
});

const configureStore = () => {
    return createStore(rootReducer, applyMiddleware(axiosMiddleware(client)));
}

export default configureStore;
