import Node from "./node";

class LinkedList<type> {
  private head: Node<type>;
  private count: number;

  constructor() {
    this.head = null;
    this.count = 0;
  }

  public push(element: type): void {
    if (this.head) {
      let node = this.head;
      while (node.next) {
        node = node.next;
      }
      node.next = new Node<type>(element);
    } else {
      this.head = new Node<type>(element);
    }

    this.count += 1;
  }

  private getNodeAt(index: number): Node<type> {
    if (index < 0 || index >= this.size()) {
      throw new Error("Index out of range.");
    }

    let node = this.head;
    for (let i = 0; i < index; i += 1) {
      node = node.next;
    }

    return node;
  }

  public getAt(index: number): type {
    if (index < 0 || index >= this.size()) {
      throw new Error("Index out of range.");
    }

    return this.getNodeAt(index).element;
  }

  public set(element: type, index: number): void {
    if (index < 0 || index >= this.size()) {
      throw new Error("Index out of range.");
    }

    const node = this.getNodeAt(index);
    node.element = element;
  }

  public insert(element: type, index: number): void {
    if (index < 0 || index > this.size()) {
      throw new Error("Index out of range.");
    }

    const node = new Node<type>(element);

    if (index === 0) {
      const current = this.head;
      node.next = current;
      this.head = node;
    } else {
      const previous = this.getNodeAt(index - 1);
      const current = previous.next;
      node.next = current;
      previous.next = node;
    }

    this.count += 1;
  }

  public indexOf(element: type): number {
    let index = 0;
    let node = this.head;

    while (node) {
      if (node.element === element) {
        return index;
      }

      index += 1;
      node = node.next;
    }

    return -1;
  }

  public removeAt(index: number): type {
    if (index < 0 || index >= this.size()) {
      throw new Error("Index out of range.");
    }

    let current = this.head;

    if (index === 0) {
      this.head = current.next;
    } else {
      const previous = this.getNodeAt(index - 1);
      current = previous.next;
      previous.next = current.next;
    }

    this.count -= 1;
    return current.element;
  }

  public remove(element: type): type {
    if (!this.head) {
      throw new Error("Can not remove element from an empty list.");
    }

    const index = this.indexOf(element);
    if (index === -1) {
      throw new Error("Can not remove a non-existing element.");
    }

    return this.removeAt(index);
  }

  public getHead(): type {
    if (this.isEmpty()) {
      throw new Error("Can not get head of an empty list.");
    }

    return this.head.element;
  }

  public clear(): void {
    this.head = null;
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

    let node = this.head;
    let string = `${node.element}`;
    while (node.next) {
      node = node.next;
      string += `, ${node.element}`;
    }

    return string;
  }
}

export default LinkedList;
