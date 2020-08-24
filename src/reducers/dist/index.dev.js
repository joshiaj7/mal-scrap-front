"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _dotaReducer = _interopRequireDefault(require("./dotaReducer"));

var _redux = require("redux");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// REDUCER -> HOW ACTION TRANSFER STATE TO THE NEXT STATE
var allReducers = (0, _redux.combineReducers)({
  dota: _dotaReducer["default"]
});
var _default = allReducers;
exports["default"] = _default;