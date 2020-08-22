"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.decrement = exports.increment = void 0;

// STORE -> GLOBALIZED STATE
var increment = function increment() {
  return {
    type: 'INCREMENT'
  };
};

exports.increment = increment;

var decrement = function decrement() {
  return {
    type: 'DECREMENT'
  };
};

exports.decrement = decrement;