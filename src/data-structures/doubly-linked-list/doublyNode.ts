/* eslint-disable no-use-before-define */
import { Node } from '../linked-list/node'

export class DoublyNode<T> extends Node<T> {
  public element: T
  public next?: DoublyNode<T>
  public previous?: DoublyNode<T>

  constructor(
    element: T,
    next: DoublyNode<T> = null,
    previous: DoublyNode<T> = null,
  ) {
    super(element, next)
    this.previous = previous
  }
}
