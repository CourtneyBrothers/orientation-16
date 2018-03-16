# orientation-16
NSS bangazon course orientation exercise #16 
Requirements to complete this exercise are listed below for clarity of purpose

## Requirements

Construct a simple calculator, using modular structure. Create modules for each operation: add, subtract, multiply, divide, plus a module for pulling in all of those operations, just as you did in the diceroll exercise.

Build the math modules using TDD with Mocha and Chai assertions. 
### usage

You will need to run `npm init -y` to create a package.json. Then run `npm install --save-dev mocha chai`

Also, add the following to your package.json:
```js
  "scripts": {
    "test": "mocha -R list --watch --recursive"
  }
```

### test folder
Create a `test` directory to store your test files in. Mocha will default to looking there for your tests. Can I type 'test' too many times? testtesttest. Looks like I can't.