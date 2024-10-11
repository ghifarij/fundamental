class Stack {
  #maxSize: number;
  #container: number[] = [];

  constructor(maxSize: number = 10) {
    this.#maxSize = maxSize;
  }
  // default value for max size is 10

  #isFull() {
    return this.#container.length >= this.#maxSize;
  }

  #isEmpty() {
    return this.#container.length == 0;
  }

  push(element: number) {
    if (this.#isFull()) {
      console.log("Stack overflow!");
      return;
    }

    this.#container.push(element);
  }

  pop() {
    if (this.#isEmpty()) {
      console.log("Stack underflow!");
      return;
    }

    this.#container.pop();
  }

  getElements() {
    return this.#container;
  }
}

const stack = new Stack(5);
stack.push(1);
stack.push(12);
stack.push(97);
stack.push(100);

console.log(stack.getElements());

stack.pop();
console.log(stack.getElements());
