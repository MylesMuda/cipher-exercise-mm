'use strict';

const { charToInt, intToChar } = require('./helpers');

const N = 26;

var shift = 2;

const shiftChar = char => {
  var charAsIntShifted = charToInt(char) + shift;
  
  if (char != ' ') {
    if (charAsIntShifted >= N) {
      return intToChar(charAsIntShifted - N)
    } else {
      return intToChar(charAsIntShifted);
    }
  } else {
    return char;
  }
};

const encrypt = message => (
  message
    .split('')
    .map(shiftChar)
    .join('')
);

const decrypt = message => {
  shift *= -1;
  return message
      .split('')
      .map(shiftChar)
      .join('')
}

module.exports = {
  decrypt,
  encrypt
};
