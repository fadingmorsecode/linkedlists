class linkedList {
  constructor(value) {
    this.head = new Node(value);
  }
  append(value) {
    let currentNode = this.head;
    while (currentNode.nextNode !== null) {
      currentNode = currentNode.nextNode;
    }
    currentNode.nextNode = new Node(value);
  }
  prepend(value) {
    let toShift = this.head;
    this.head = new Node(value);
    this.head.nextNode = toShift;
  }
  getSize() {
    let size = 0;
    let currentNode = this.head;
    while (currentNode !== null) {
      size += 1;
      currentNode = currentNode.nextNode;
    }
    return size;
  }
  getHead() {
    return this.head;
  }
  getTail() {
    let currentNode = this.head;
    while (currentNode.nextNode !== null) {
      currentNode = currentNode.nextNode;
    }
    return currentNode;
  }
  at(index) {
    let currentNode = this.head;
    for (let i = 0; i < index; i++) {
      if (currentNode.nextNode === null) {
        return 'index not found';
      }
      currentNode = currentNode.nextNode;
    }
    return currentNode;
  }
  pop() {
    let currentNode = this.head;
    while (currentNode.nextNode !== null) {
      currentNode = currentNode.nextNode;
      if (currentNode.nextNode.nextNode === null) {
        currentNode.nextNode = null;
      }
    }
  }
  contains(value) {
    let currentNode = this.head;
    let result = false;
    while (currentNode.nextNode !== null) {
      currentNode = currentNode.nextNode;
      if (currentNode.value === value) {
        result = true;
      }
    }
    return result;
  }
  find(value) {
    let index = 0;
    let currentNode = this.head;
    while (currentNode !== null) {
      if (currentNode.value === value) {
        return index;
      }
      currentNode = currentNode.nextNode;
      index += 1;
    }
    return null;
  }
  toString() {
    let string = '';
    let currentNode = this.head;
    while (currentNode !== null) {
      string += `(${currentNode.value}) -> `;
      currentNode = currentNode.nextNode;
    }
    return string + 'null';
  }
  insertAt(value, index) {
    let newNode = new Node(value);
    let prevNode;
    let currentNode = this.head;
    if (index === 0) {
      newNode.nextNode = this.head;
      this.head = newNode;
      return;
    }
    for (let i = 0; i < index; i++) {
      if (currentNode.nextNode === null) {
        return 'index not found';
      }
      prevNode = currentNode;
      currentNode = currentNode.nextNode;
    }
    let toKeep = prevNode.nextNode;
    prevNode.nextNode = newNode;
    newNode.nextNode = toKeep;
  }
  removeAt(index) {
    let prevNode;
    let currentNode = this.head;
    if (index === 0) {
      this.head = this.head.nextNode;
      return;
    }
    for (let i = 0; i < index; i++) {
      if (currentNode.nextNode === null) {
        return 'index not found';
      }
      prevNode = currentNode;
      currentNode = currentNode.nextNode;
    }
    let toKeep = currentNode.nextNode;
    prevNode.nextNode = toKeep;
  }
}

class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

let list = new linkedList('neil young');
list.append('lynard skynard');
list.append('the eagles');
list.append('the stones');
list.prepend('duran duran');
list.append('beatles');
list.pop();
list.insertAt('something', 0);
list.removeAt(1);
