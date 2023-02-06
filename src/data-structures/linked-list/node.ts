/* eslint-disable no-use-before-define */
export class Node<T> {
  public element: T
  public next?: Node<T>

  constructor(element: T, next: Node<T> = null) {
    this.element = element
    this.next = next
  }
}
