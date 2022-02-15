class Node<Type> {
  public data: Type;
  public next?: Node<Type>;

  constructor(data: Type, next: Node<Type> = undefined) {
    this.data = data;
    this.next = next;
  }
}

export default Node;
