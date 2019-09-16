class Stack {
  constructor () {
    this.count = 0,
    this.all = []
  }

  //push value to the front
  push(val) {
    this.count++;
    return this.all.unshift(val);
  }

  // Pop
  pop() {
    this.count--;
    return this.all.shift();
  }

  // Size management of stack
  size() {
    return this.count;
  }

  // Output of stack
  isEmpty () {
    return this.size == 0 ? true : false;
  }
}

/*
Challenge / Check for Understanding
Find a partner and show each other your own Stack class. Explain how the class you wrote works.

Next, ask each other the following questions:

What is difference between a stack and a simple array?
  // using a class to implement this kind of data structure uses LIFO

Which method uses LIFO?
  // push() and pop()

Which methods are used in the stack data structure?
  // push

What is the runtime complexity of a stack?
  // push (O)n
  // pop() (O)n
  // size() (O)n
  // isEmpty() (O)n

How to make simple class as a stack class?
What is the meaning of '_' (underscore) in the beginning of the variable name? Refer Playing with data structures in Javascript — Stack
Give some day-to-day examples where stack is used.

What is difference between stack and queue?
  // FIFO, first in first out
*/

