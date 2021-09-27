'use strict';

const { charToInt, intToChar } = require('./helpers');

const N = 26;

var shift;

const shiftChar = char => {
  var charAsIntShifted = charToInt(char) + shift;
  
  if (char !== ' ') {
    if (charAsIntShifted >= N) {
      return intToChar(charAsIntShifted - N);
    } else if(charAsIntShifted < 0){
      return intToChar(charAsIntShifted + N);
    } else {
      return intToChar(charAsIntShifted);
    }
  } else {
    return char;
  }
};

const encrypt = (message, shiftAmount) => {
  shift = shiftAmount;
  const encryptedMessage = message
    .split('')
    .map(shiftChar)
    .join('');
  shift = 0;
  return encryptedMessage;
};

const decrypt = (message, shiftAmount)  => {
  shift = shiftAmount*(-1);
  const decryptedMessage = message
    .split('')
    .map(shiftChar)
    .join('');
  shift = 0;
  return decryptedMessage;
};

module.exports = {
  decrypt,
  encrypt
};
