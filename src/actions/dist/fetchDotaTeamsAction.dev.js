"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchDotaTeams = void 0;

var _types = require("./types");

var fetchDotaTeams = function fetchDotaTeams() {
  return function (dispatch) {
    console.log('fetching');
    fetch('https://api.opendota.com/api/teams').then(function (res) {
      return res.json();
    }).then(function (teams) {
      return dispatch({
        type: _types.FETCH_DOTA_TEAMS,
        payload: teams
      });
    });
  };
};

exports.fetchDotaTeams = fetchDotaTeams;