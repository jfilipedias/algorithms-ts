/* eslint-disable no-use-before-define */
import { Node } from '@/data-structures/linked-list/node'

export class DoublyNode<T> extends Node<T> {
  constructor(
    public element: T,
    public next?: DoublyNode<T>,
    public previous?: DoublyNode<T>,
  ) {
    super(element, next)
    this.previous = previous
  }
}
