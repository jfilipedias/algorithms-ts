class Stack<Type> {
  private list: object;
  private count: number;

  constructor() {
    this.list = {};
    this.count = 0;
  }

  public peek(): Type {
    if (this.isEmpty()) {
      throw new Error("Can not get element from an empty stack.");
    }

    return this.list[this.count - 1];
  }

  public push(value: Type): void {
    this.list[this.count] = value;
    this.count += 1;
  }

  public pop(): Type {
    if (this.isEmpty()) {
      throw new Error("Can not pop element from an empty stack.");
    }

    this.count -= 1;
    const element = this.list[this.count];
    delete this.list[this.count];

    return element;
  }

  public clear(): void {
    this.list = {};
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

    let str = `${this.list[0]}`;

    for (let i = 1; i < this.count; i += 1) {
      str = `${str}, ${this.list[i]}`;
    }

    return str;
  }
}

export { Stack };
