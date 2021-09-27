'use strict';

const cipherExercise = require('.');

const simple = {
  message: 'abc',
  shifted: 'cde',
  shiftAmount: 2
};

const tricky = {
  message: 'xyz',
  shifted: 'zab',
  shiftAmount: 2
};

const words = {
  message: 'abc abc',
  shifted: 'cde cde',
  shiftAmount: 2
};

const complex = {
  message: 'my very secret message',
  shifted: 'oa xgta ugetgv oguucig',
  shiftAmount: 2
};

const shiftByFive = {
  message: 'shift characters by five spaces',
  shifted: 'xmnky hmfwfhyjwx gd knaj xufhjx',
  shiftAmount: 5
}

describe('cipher-exercise', () => {
  const { decrypt, encrypt } = cipherExercise || {};

  it('is an object', () => expect(typeof cipherExercise).toBe('object'));
  it('has a decrypt property', () => expect(decrypt).toBeDefined());
  it('has a encrypt property', () => expect(encrypt).toBeDefined());

  describe('encrypt', () => {
    it('is a function', () => expect(typeof encrypt).toBe('function'));
    it('that takes 1 parameter', () => expect(encrypt).toHaveLength(2));

    describe('when called', () => {
      let result;

      describe('with a simple message', () => {
        beforeEach(() => {
          result = encrypt(simple.message, simple.shiftAmount);
        });

        it('returns a string', () => expect(typeof result).toBe('string'));
        it('in which the letters are shifted by 2', () => expect(result).toBe(simple.shifted));
      });

      describe('with a tricky message', () => {
        beforeEach(() => {
          result = encrypt(tricky.message, tricky.shiftAmount);
        });

        it('returns a string', () => expect(typeof result).toBe('string'));
        it('in which the letters are shifted by 2 and wrap', () => expect(result).toBe(tricky.shifted));
      });

      describe('with a multi-word message', () => {
        beforeEach(() => {
          result = encrypt(words.message, words.shiftAmount);
        });

        it('returns a string', () => expect(typeof result).toBe('string'));
        it('in which the letters (but NOT spaces) are shifted by 2', () => expect(result).toBe(words.shifted));
      });

      describe('with a complex message', () => {
        beforeEach(() => {
          result = encrypt(complex.message, complex.shiftAmount);
        });

        it('returns a string', () => expect(typeof result).toBe('string'));
        it('in which the letters are shifted by 2', () => expect(result).toBe(complex.shifted));
      });

      describe('with a shift amount of 5', () => {
        beforeEach(() => {
          result = encrypt(shiftByFive.message, shiftByFive.shiftAmount);
        });

        it('returns a string', () => expect(typeof result).toBe('string'));
        it('in which the letters are shifted by 5', () => expect(result).toBe(shiftByFive.shifted));
      });
    });
  });

  describe('decrypt', () => {
    it('is a function', () => expect(typeof decrypt).toBe('function'));
    it('that takes 2 parameters', () => expect(decrypt).toHaveLength(2));

    describe('when called, reverses the effects of encrypt', () => {
      let result;

      describe('with a simple message', () => {
        beforeEach(() => {
          result = decrypt(
            encrypt(simple.message, simple.shiftAmount),
            simple.shiftAmount
          );
        });

        it('restores the message', () => expect(result).toBe(simple.message));
      });

      describe('with a tricky message', () => {
        beforeEach(() => {
          result = decrypt(
            encrypt(tricky.message, tricky.shiftAmount),
            tricky.shiftAmount
          );
        });

        it('restores the message', () => expect(result).toBe(tricky.message));
      });

      describe('with a multi-word message', () => {
        beforeEach(() => {
          result = decrypt(
            encrypt(words.message, words.shiftAmount),
            words.shiftAmount
          );
        });

        it('restores the message', () => expect(result).toBe(words.message));
      });

      describe('with a complex message', () => {
        beforeEach(() => {
          result = decrypt(
            encrypt(complex.message, complex.shiftAmount),
            complex.shiftAmount
          );
        });

        it('restores the message', () => expect(result).toBe(complex.message));
      });

      describe('with a shift amount of 5', () => {
        beforeEach(() => {
          result = decrypt(
            encrypt(shiftByFive.message, shiftByFive.shiftAmount),
            shiftByFive.shiftAmount
          );
        });

        it('restores the message', () => expect(result).toBe(shiftByFive.message));
      });
    });
  });
});
