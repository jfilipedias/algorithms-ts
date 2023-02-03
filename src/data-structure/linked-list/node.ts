class Node<type> {
  public element: type;
  public next?: Node<type>;

  constructor(element: type, next: Node<type> = null) {
    this.element = element;
    this.next = next;
  }
}

export default Node;
