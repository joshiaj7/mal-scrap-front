import { FETCH_DOTA_TEAMS } from '../actions/types';

const initialState = {
    teams: [],
}

export default function(state = initialState, action) {
    switch(action.type) {
        case FETCH_DOTA_TEAMS:
            return {
                ...state,
                teams: action.payload
            };
        default:
            return state;
    }
};