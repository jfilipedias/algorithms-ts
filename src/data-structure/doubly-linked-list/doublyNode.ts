class DoublyNode<type> {
  public element: type;
  public next?: DoublyNode<type>;
  public previous?: DoublyNode<type>;

  constructor(
    element: type,
    next: DoublyNode<type> = null,
    previous: DoublyNode<type> = null
  ) {
    this.element = element;
    this.next = next;
    this.previous = previous;
  }
}

export default DoublyNode;
