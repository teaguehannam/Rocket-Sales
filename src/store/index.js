import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import rocket from './rocket.js';
import flight from './flight.js';

const reducer = combineReducers({
    rocket,
    flight
})

export default configureStore({
    reducer,
})
