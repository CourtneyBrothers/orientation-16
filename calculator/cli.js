#!/usr/bin/env node

const add = require('./add');
const subtract = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide');

const rs = require('readline-sync');
const x = rs.question('please enter a number');
const y = rs.question('please enter a number');
const calc = rs.question('please enter + / - *')

if (calc === "+"){
    console.log(add(x,y));
} else if (calc === "/"){
    console.log(divide(x,y));
} else if (calc === "-"){
    console.log(subtract(x-y));
} else {
    console.log(multiply(x,y));
}