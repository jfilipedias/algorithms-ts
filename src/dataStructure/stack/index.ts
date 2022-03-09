class Stack<Type> {
  private items: object;
  private count: number;

  constructor() {
    this.items = {};
    this.count = 0;
  }

  public peek(): Type {
    if (this.isEmpty()) {
      throw new Error("Can not get element from an empty stack.");
    }

    return this.items[this.count - 1];
  }

  public push(element: Type): void {
    this.items[this.count] = element;
    this.count += 1;
  }

  public pop(): Type {
    if (this.isEmpty()) {
      throw new Error("Can not pop element from an empty stack.");
    }

    this.count -= 1;
    const element = this.items[this.count];
    delete this.items[this.count];

    return element;
  }

  public clear(): void {
    this.items = {};
    this.count = 0;
  }

  public size(): number {
    return this.count;
  }

  public isEmpty(): boolean {
    return this.count === 0;
  }

  public toString(): string {
    if (this.isEmpty()) {
      return "";
    }

    let str = `${this.items[0]}`;

    for (let i = 1; i < this.count; i += 1) {
      str = `${str}, ${this.items[i]}`;
    }

    return str;
  }
}

export { Stack };
