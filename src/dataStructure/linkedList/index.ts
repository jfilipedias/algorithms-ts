import Node from "./node";

class LinkedList<Type> {
  public head: Node<Type>;
  public length: number;

  constructor() {
    this.head = null;
    this.length = 0;
  }

  public get(index: number): Type {
    if (index < 0 || index >= this.length) {
      throw new Error("Index out of range.");
    }

    let node = this.head;
    for (let i = 0; i < index; i += 1) {
      node = node.next;
    }

    return node.data;
  }

  public set(index: number, data: Type): void {
    if (index < 0 || index >= this.length) {
      throw new Error("Index out of range.");
    }

    let node = this.head;
    for (let i = 0; i < index; i += 1) {
      node = node.next;
    }

    node.data = data;
  }

  public insert(index: number, data: Type): void {
    if (index < 0 || index > this.length) {
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

  public append(data: Type): void {
    if (!this.head) {
      this.head = new Node<Type>(data);
    } else {
      let node = this.head;
      while (node.next) {
        node = node.next;
      }
      node.next = new Node<Type>(data);
    }

    this.length += 1;
  }

  public toString(): string {
    let node = this.head;
    let str = "";
    while (node) {
      str += `${node.data} -> `;
      node = node.next;
    }
    str += "null";
    return str;
  }
}

export default LinkedList;
