const {assert:{isFunction,equal}} = require("chai");
const subtract = require('../calculator/subtract');
const {expect} = require("chai");

describe('subtract', () => {
    it('should be a function', () => {
      isFunction(subtract);
    });
    it ('should return the result of subtracting two numbers',()=>{
        equal(0, subtract(4,4));
    })
    it ('should convert strings to numbers',()=>{
        equal(0, subtract("4","4"));
    })
  });
