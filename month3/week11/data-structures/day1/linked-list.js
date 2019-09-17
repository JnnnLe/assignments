class Node {
  constructor (data) {
    this.data = this.data,
    this.next = null
  }
}

class singlyLinkedList {
  constructor () {
    this.head = null, 
    this._length = 0,
    this.currentNode = null
  }

  add (val) {
    let node = new Node(val);

    // first node to be added
    if (!this.head) {
      this.head = node;
      this._length++;
      this.currentNode = node;
      return node;
    }

    // search through all of the nodes
    while (this.currentNode.next) {
      this.currentNode = this.currentNode.next;
    }

    // 
  }

// end of SLL
}