import postReducer from './postReducer';
import { combineReducers } from 'redux';

// REDUCER -> HOW ACTION TRANSFER STATE TO THE NEXT STATE
const allReducers = combineReducers({
    posts: postReducer
});

export default allReducers;
