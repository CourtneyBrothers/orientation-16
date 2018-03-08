const {assert:{isFunction,equal}} = require("chai");
const multiply = require('../calculator/multiply');
const {expect} = require("chai");

describe('multiply', () => {
    it('should be a function', () => {
      isFunction(multiply);
    });
    it ('should return the result of multiplying two numbers',()=>{
        equal(16, multiply(4,4));
    })
    it ('should convert strings to numbers',()=>{
        equal(16, multiply("4","4"));
    })
  });
