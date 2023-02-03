/* eslint-disable no-use-before-define */
export class DoublyNode<T> {
  public element: T
  public next?: DoublyNode<T>
  public previous?: DoublyNode<T>

  constructor(
    element: T,
    next: DoublyNode<T> = null,
    previous: DoublyNode<T> = null,
  ) {
    this.element = element
    this.next = next
    this.previous = previous
  }
}
