"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchPosts = void 0;

var _types = require("./types");

var fetchPosts = function fetchPosts() {
  return function (dispatch) {
    console.log('fetching');
    fetch('https://jsonplaceholder.typicode.com/posts').then(function (res) {
      return res.json();
    }).then(function (posts) {
      return dispatch({
        type: _types.FETCH_POST,
        payload: posts
      });
    });
  };
}; // export function fetchPosts() {
//     return function(dispatch) {
//         fetch('https://jsonplaceholder.typicode.com/posts')
//         .then(res => res.json())
//         .then(posts => dispatch({
//             type: FETCH_POST,
//             payload: posts,
//         })); 
//     } 
// }


exports.fetchPosts = fetchPosts;