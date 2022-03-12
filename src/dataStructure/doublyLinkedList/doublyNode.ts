class DoublyNode<type> {
  private element: type;
  private next?: DoublyNode<type>;
  private previous?: DoublyNode<type>;

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
