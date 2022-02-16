class Node<Type> {
  public value: Type;
  public next?: Node<Type>;

  constructor(value: Type, next: Node<Type> = null) {
    this.value = value;
    this.next = next;
  }
}

export default Node;
