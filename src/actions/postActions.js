import { FETCH_POST } from './types';

export const fetchPosts = () => dispatch => {
    console.log('fetching');
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(posts => 
        dispatch({
            type: FETCH_POST,
            payload: posts,
        })
    ); 
}

// export function fetchPosts() {
//     return function(dispatch) {
//         fetch('https://jsonplaceholder.typicode.com/posts')
//         .then(res => res.json())
//         .then(posts => dispatch({
//             type: FETCH_POST,
//             payload: posts,
//         })); 
//     } 
// }