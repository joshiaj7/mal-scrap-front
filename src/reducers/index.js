import dotaReducer from './dotaReducer';
import { combineReducers } from 'redux';

// REDUCER -> HOW ACTION TRANSFER STATE TO THE NEXT STATE
const allReducers = combineReducers({
    dota: dotaReducer,
});

export default allReducers;
