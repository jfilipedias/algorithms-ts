class Node<Type> {
  public data: Type;
  public next?: Node<Type>;

  constructor(data: Type) {
    this.data = data;
    this.next = undefined;
  }
}

export default Node;
