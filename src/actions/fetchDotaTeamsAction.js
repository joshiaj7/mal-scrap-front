import { FETCH_DOTA_TEAMS } from './types';

export const fetchDotaTeams = () => dispatch => {
    console.log('fetching');
    fetch('https://api.opendota.com/api/teams')
    .then(res => res.json())
    .then(teams => 
        dispatch({
            type: FETCH_DOTA_TEAMS,
            payload: teams,
        })
    ); 
}