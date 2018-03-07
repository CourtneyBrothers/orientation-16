const {assert:{isFunction,equal}} = require("chai");
const add = require('../calculator/add');
const {expect} = require("chai");

describe('add', () => {
    it('should be a function', () => {
      isFunction(add);
    });
    it ('should return sum of two numbers',()=>{
        equal(4, add(2,2));
    })
    it ('should convert strings to numbers',()=>{
        equal(4, add("2","2"));
    })
  });
