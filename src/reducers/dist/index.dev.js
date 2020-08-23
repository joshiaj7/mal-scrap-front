"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _postReducer = _interopRequireDefault(require("./postReducer"));

var _redux = require("redux");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// REDUCER -> HOW ACTION TRANSFER STATE TO THE NEXT STATE
var allReducers = (0, _redux.combineReducers)({
  posts: _postReducer["default"]
});
var _default = allReducers;
exports["default"] = _default;