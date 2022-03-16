import DoublyNode from "./doublyNode";

class DoublyLinkedList<type> {
  private head: DoublyNode<type>;
  private tail: DoublyNode<type>;
  private count: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.count = 0;
  }
}

export default DoublyLinkedList;
