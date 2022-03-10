class Node<type> {
  public value: type;
  public next?: Node<type>;

  constructor(value: type, next: Node<type> = null) {
    this.value = value;
    this.next = next;
  }
}

export default Node;
