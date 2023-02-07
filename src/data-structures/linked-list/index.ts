import { Node } from './node'

export class LinkedList<T> {
  constructor(private head?: Node<T>, private count = 0) {}

  public push(element: T): void {
    if (this.head) {
      let node = this.head
      while (node.next) {
        node = node.next
      }
      node.next = new Node<T>(element)
    } else {
      this.head = new Node<T>(element)
    }

    this.count += 1
  }

  private getNodeAt(index: number) {
    if (index < 0 || index >= this.size()) {
      throw new Error('Index out of range.')
    }

    let node = this.head
    for (let i = 0; i < index; i += 1) {
      node = node!.next
    }

    return node!
  }

  public getAt(index: number) {
    if (index < 0 || index >= this.size()) {
      throw new Error('Index out of range.')
    }

    const node = this.getNodeAt(index)

    return node.element
  }

  public insert(element: T, index: number): void {
    if (index < 0 || index > this.size()) {
      throw new Error('Index out of range.')
    }

    const node = new Node<T>(element)

    if (index === 0) {
      const current = this.head
      node.next = current
      this.head = node
    } else {
      const previous = this.getNodeAt(index - 1)
      const current = previous.next
      node.next = current
      previous.next = node
    }

    this.count += 1
  }

  public indexOf(element: T) {
    let index = 0
    let node = this.head

    while (node) {
      if (node.element === element) {
        return index
      }

      index += 1
      node = node.next
    }

    return -1
  }

  public removeAt(index: number) {
    if (index < 0 || index >= this.size()) {
      throw new Error('Index out of range.')
    }

    let current = this.head

    if (index === 0) {
      this.head = current!.next
    } else {
      const previous = this.getNodeAt(index - 1)
      current = previous.next
      previous.next = current?.next
    }

    this.count -= 1
    return current!.element
  }

  public remove(element: T) {
    if (!this.head) {
      throw new Error('Can not remove element from an empty list.')
    }

    const index = this.indexOf(element)
    if (index === -1) {
      throw new Error('Can not remove a non-existing element.')
    }

    return this.removeAt(index)
  }

  public getHead() {
    if (this.isEmpty()) {
      throw new Error('Can not get head of an empty list.')
    }

    return this.head!.element
  }

  public clear() {
    this.head = undefined
    this.count = 0
  }

  public size() {
    return this.count
  }

  public isEmpty() {
    return this.count === 0
  }

  public toString() {
    if (this.isEmpty()) {
      return ''
    }

    let node = this.head
    let string = `${node?.element}`
    while (node?.next) {
      node = node.next
      string += `, ${node.element}`
    }

    return string
  }
}
