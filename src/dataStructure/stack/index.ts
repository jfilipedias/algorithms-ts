import LinkedList from "../linkedList";

class Stack<Type> {
  private list: LinkedList<Type>;

  constructor() {
    this.list = new LinkedList<Type>();
  }

  public peek(): Type {
    if (this.isEmpty()) {
      throw new Error("Can not get element from an empty stack.");
    }
    return this.list.getFirst();
  }

  public push(value: Type): void {
    this.list.prepend(value);
  }

  public pop(): Type {
    if (this.isEmpty()) {
      throw new Error("Can not pop element from an empty stack.");
    }

    const element = this.list.getFirst();
    this.list.deleteAt(0);
    return element;
  }

  public size(): number {
    return this.list.size();
  }

  public isEmpty(): boolean {
    return this.list.isEmpty();
  }

  public toString(): string {
    return this.list.toString();
  }
}

export { Stack };
