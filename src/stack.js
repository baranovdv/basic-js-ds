const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  push(element) {
    // throw new NotImplementedError('Not implemented');
    this[Object.keys(this).length + 1] = element;
    // remove line with error and write your code here
  }

  pop() {
    // throw new NotImplementedError('Not implemented');
      let a = this[Object.keys(this).length];
      delete this[Object.keys(this).length];
      return a;
    // remove line with error and write your code here
  }

  peek() {
    // throw new NotImplementedError('Not implemented');
    return this[Object.keys(this).length];
    // remove line with error and write your code here
  }
}

module.exports = {
  Stack
};
