class Queue<type> {
  private items: object;
  private count: number;
  private lowestCount: number;

  constructor() {
    this.items = {};
    this.count = 0;
    this.lowestCount = 0;
  }

  public peek(): type {
    if (this.isEmpty()) {
      throw new Error("Can not get element from an empty queue.");
    }

    return this.items[this.lowestCount];
  }

  public enqueue(element: type): void {
    this.items[this.count] = element;
    this.count += 1;
  }

  public dequeue(): type {
    if (this.isEmpty()) {
      throw new Error("Can not dequeue an empty queue.");
    }

    const element = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount += 1;

    return element;
  }

  public clear(): void {
    this.items = {};
    this.count = 0;
    this.lowestCount = 0;
  }

  public size(): number {
    return this.count - this.lowestCount;
  }

  public isEmpty(): boolean {
    return this.size() === 0;
  }

  public toString(): string {
    if (this.isEmpty()) {
      return "";
    }

    let str = `${this.items[this.lowestCount]}`;

    for (let i = this.lowestCount + 1; i < this.count; i += 1) {
      str = `${str}, ${this.items[i]}`;
    }

    return str;
  }
}

export default Queue;
