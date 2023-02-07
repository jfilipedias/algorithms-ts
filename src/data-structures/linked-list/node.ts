/* eslint-disable no-use-before-define */
export class Node<T> {
  constructor(public element: T, public next?: Node<T>) {
    this.element = element
    this.next = next
  }
}
