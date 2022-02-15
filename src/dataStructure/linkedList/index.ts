import Node from "./node";

class LinkedList<Type> {
  public head: Node<Type>;
  public length: number;

  constructor() {
    this.head = undefined;
    this.length = 0;
  }

  public get(index: number): Type {
    if (index < 0 || index >= this.length) {
      throw new Error("Index out of range.");
    }

    let current = this.head;
    for (let i = 0; i < index; i += 1) {
      current = current.next;
    }

    return current.data;
  }

  public append(data: Type): void {
    if (!this.head) {
      this.head = new Node<Type>(data);
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = new Node<Type>(data);
    }

    this.length += 1;
  }
}

export default LinkedList;
