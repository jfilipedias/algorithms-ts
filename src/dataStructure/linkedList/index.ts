import Node from "./node";

class LinkedList<Type> {
  private head: Node<Type>;

  constructor() {
    this.head = null;
  }

  public append(data: Type): void {
    if (this.head) {
      let node = this.head;
      while (node.next) {
        node = node.next;
      }
      node.next = new Node<Type>(data);
    } else {
      this.head = new Node<Type>(data);
    }
  }

  public prepend(data: Type): void {
    const node = new Node<Type>(data, this.head);
    this.head = node;
  }

  public insert(index: number, data: Type): void {
    if (index < 0 || index > this.size()) {
      throw new Error("Index out of range.");
    }

    if (index === 0) {
      this.head = new Node<Type>(data, this.head);
    } else {
      let node = this.head;
      for (let i = 0; i < index - 1; i += 1) {
        node = node.next;
      }
      node.next = new Node<Type>(data, node.next);
    }
  }

  public delete(data: Type): boolean {
    if (!this.head) {
      throw new Error("Can not delete element from an empty list.");
    }

    if (this.head.data === data) {
      this.head = this.head.next;
      return true;
    }

    let currentNode = this.head;
    while (currentNode.next) {
      if (currentNode.next.data === data) {
        currentNode.next = currentNode.next.next;

        return true;
      }

      currentNode = currentNode.next;
    }

    return false;
  }

  public deleteAt(index: number): void {
    if (index < 0 || index >= this.size()) {
      throw new Error("Index out of range.");
    }

    if (index === 0) {
      this.head = this.head.next;
      return;
    }

    let currentNode = this.head;
    for (let i = 0; i < index - 1; i += 1) {
      currentNode = currentNode.next;
    }

    currentNode.next = currentNode.next.next;
  }

  public get(index: number): Type {
    if (index < 0 || index >= this.size()) {
      throw new Error("Index out of range.");
    }

    let node = this.head;
    for (let i = 0; i < index; i += 1) {
      node = node.next;
    }

    return node.data;
  }

  public getFirst(): Type {
    if (this.isEmpty()) {
      throw new Error("Can not get element from an empty list.");
    }

    return this.head.data;
  }

  public getLast(): Type {
    if (this.isEmpty()) {
      throw new Error("Can not get element from an empty list.");
    }

    let lastNode = this.head;
    while (lastNode.next) {
      lastNode = lastNode.next;
    }

    return lastNode.data;
  }

  public set(index: number, data: Type): void {
    if (index < 0 || index >= this.size()) {
      throw new Error("Index out of range.");
    }

    let node = this.head;
    for (let i = 0; i < index; i += 1) {
      node = node.next;
    }

    node.data = data;
  }

  public indexOf(data: Type): number {
    let index = 0;
    let node = this.head;
    while (node) {
      if (node.data === data) {
        return index;
      }

      index += 1;
      node = node.next;
    }

    return -1;
  }

  public clear(): void {
    this.head = null;
  }

  public size(): number {
    let count = 0;
    let node = this.head;
    while (node) {
      count += 1;
      node = node.next;
    }

    return count;
  }

  public isEmpty(): boolean {
    return !this.head;
  }

  public toString(): string {
    let str = "";
    let node = this.head;
    while (node) {
      str += `${node.data} -> `;
      node = node.next;
    }

    str += "null";
    return str;
  }
}

export default LinkedList;
