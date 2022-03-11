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

  public prepend(element: type): void {
    const node = new Node<type>(element, this.head);
    this.head = node;
    this.count += 1;
  }

  public insert(element: type, index: number): void {
    if (index < 0 || index > this.size()) {
      throw new Error("Index out of range.");
    }

    if (index === 0) {
      this.head = new Node<type>(element, this.head);
    } else {
      let node = this.head;
      for (let i = 0; i < index - 1; i += 1) {
        node = node.next;
      }
      node.next = new Node<type>(element, node.next);
    }

    this.count += 1;
  }

  public remove(element: type): void {
    if (!this.head) {
      throw new Error("Can not delete element from an empty list.");
    }

    if (this.head.element === element) {
      this.head = this.head.next;
      this.count -= 1;
    }

    let currentNode = this.head;
    while (currentNode.next) {
      if (currentNode.next.element === element) {
        currentNode.next = currentNode.next.next;
        this.count -= 1;
      }

      currentNode = currentNode.next;
    }
  }

  public removeAt(index: number): void {
    if (index < 0 || index >= this.size()) {
      throw new Error("Index out of range.");
    }

    if (index === 0) {
      this.head = this.head.next;
      this.count -= 1;
      return;
    }

    let currentNode = this.head;
    for (let i = 0; i < index - 1; i += 1) {
      currentNode = currentNode.next;
    }

    currentNode.next = currentNode.next.next;
    this.count -= 1;
  }

  public getAt(index: number): type {
    if (index < 0 || index >= this.size()) {
      throw new Error("Index out of range.");
    }

    let node = this.head;
    for (let i = 0; i < index; i += 1) {
      node = node.next;
    }

    return node.element;
  }

  public getFirst(): type {
    if (this.isEmpty()) {
      throw new Error("Can not get element from an empty list.");
    }

    return this.head.element;
  }

  public getLast(): type {
    if (this.isEmpty()) {
      throw new Error("Can not get element from an empty list.");
    }

    let lastNode = this.head;
    while (lastNode.next) {
      lastNode = lastNode.next;
    }

    return lastNode.element;
  }

  public set(element: type, index: number): void {
    if (index < 0 || index >= this.size()) {
      throw new Error("Index out of range.");
    }

    let node = this.head;
    for (let i = 0; i < index; i += 1) {
      node = node.next;
    }

    node.element = element;
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
