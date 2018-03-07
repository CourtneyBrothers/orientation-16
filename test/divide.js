const {assert:{isFunction,equal}} = require("chai");
const divide = require('../calculator/divide');
const {expect} = require("chai");

describe('divide', () => {
    it('should be a function', () => {
      isFunction(divide);
    });
    it ('should return the quotient of two numbers',()=>{
        equal(4, divide(16,4));
    })
    it ('should convert strings to numbers',()=>{
        equal(4, divide("16","4"));
    })
  });
