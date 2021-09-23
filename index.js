'use strict';

const { charToInt, intToChar } = require('./helpers');

const N = 26; // Might be useful

const shiftChar = char => {
  var charAsIntShifted = charToInt(char) + 2;
  
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

const decrypt = message => 'IMPLEMENT ME'; // Broken!

module.exports = {
  decrypt,
  encrypt
};
