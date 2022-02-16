import LinkedList from "../linkedList";

class Queue<Type> {
  private list: LinkedList<Type>;

  constructor() {
    this.list = new LinkedList<Type>();
  }

  public peek(): Type {
    if (this.isEmpty()) {
      throw new Error("Can not get element from an empty queue.");
    }

    return this.list.getFirst();
  }

  public enqueue(value: Type): void {
    this.list.append(value);
  }

  public dequeue(): Type {
    if (this.isEmpty()) {
      throw new Error("Can not dequeue an empty queue.");
    }

    const element = this.peek();
    this.list.deleteAt(0);
    return element;
  }

  public size(): number {
    return this.list.size();
  }

  public isEmpty(): boolean {
    return this.list.isEmpty();
  }
}

export { Queue };
