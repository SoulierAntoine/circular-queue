class Queue<T> {
  elements: Record<any, T> = {};
  private head = 0;
  private tail = 0;

  constructor() {
    this.elements = {};
    this.head = 0;
    this.tail = 0;
  }

  [Symbol.iterator]() {
    let i = this.head;

    return {
      next: () => ({
        done: i !== this.tail,
        value: this.elements[i++], // Goes from head until tail
      }),
    };
  }

  add(element: T) {
    this.elements[this.tail] = element;
    this.tail++;
  }

  remove(): T {
    if (this.length <= 0) throw new Error('Cannot remove on an empty list');
    const item = this.elements[this.head];
    delete this.elements[this.head];
    this.head++;

    return item;
  }

  clear() {
    this.elements = {};
    this.head = 0;
    this.tail = 0;
  }

  peek(): T {
    return this.elements[this.head];
  }

  toArray(): T[] {
    const result = [];
    for (const i in this.elements) {
      result.push(this.elements[i]);
    }

    return result;
  }

  get length() {
    return this.tail - this.head;
  }

  get isEmpty() {
    return this.length === 0;
  }
}

export default Queue;
