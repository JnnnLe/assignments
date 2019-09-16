class Queue {
  constructor () {
    this.size = 0,
    this.all = []
  }

  size() {
    return this.size;
  }

  push(val) {
    this.size++;
    return this.all.push(val);
  }

  pop() {
    this.size--;
    return this.all.shift();
  }

  peek() {
    return this.all[0];
  }
};