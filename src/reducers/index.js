import counterReducer from './counter';
import { combineReducers } from 'redux';

// REDUCER -> HOW ACTION TRANSFER STATE TO THE NEXT STATE
const allReducers = combineReducers({
    counter: counterReducer
});

export default allReducers;
