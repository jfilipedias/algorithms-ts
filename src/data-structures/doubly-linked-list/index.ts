import { DoublyNode } from './doubly-node'

export class DoublyLinkedList<T> {
  private head: DoublyNode<T>
  private tail: DoublyNode<T>
  private count: number

  constructor() {
    this.head = null
    this.tail = null
    this.count = 0
  }

  public push(element: T): void {
    const node = new DoublyNode(element)

    if (this.tail) {
      this.tail.next = node
      node.previous = this.tail
      this.tail = node
    } else {
      this.head = node
      this.tail = node
    }

    this.count += 1
  }

  private getNodeAt(index: number): DoublyNode<T> {
    if (index < 0 || index >= this.size()) {
      throw new Error('Index out of range.')
    }

    let node = this.head
    for (let i = 0; i < index; i += 1) {
      node = node.next
    }

    return node
  }

  public getAt(index: number): T {
    if (index < 0 || index >= this.size()) {
      throw new Error('Index out of range.')
    }

    return this.getNodeAt(index).element
  }

  public insert(element: T, index: number): void {
    if (index < 0 || index > this.size()) {
      throw new Error('Index out of range.')
    }

    const node = new DoublyNode(element)
    const current = this.head

    if (index === 0) {
      if (this.head) {
        node.next = this.head
        current.previous = node
        this.head = node
      } else {
        this.head = node
        this.tail = node
      }
    } else if (index === this.size()) {
      this.tail.next = node
      node.previous = this.tail
      this.tail = node
    } else {
      const previous = this.getNodeAt(index - 1)
      const current = previous.next
      node.next = current
      node.previous = previous
      previous.next = node
      current.previous = node
    }

    this.count += 1
  }

  public indexOf(element: T): number {
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

  public removeAt(index: number): T {
    if (index < 0 || index >= this.size()) {
      throw new Error('Index out of range.')
    }

    let current = this.head

    if (index === 0) {
      this.head = current.next

      if (this.count === 1) {
        this.tail = null
      } else {
        this.head.previous = null
      }
    } else if (index === this.count - 1) {
      current = this.tail
      this.tail = current.previous
      this.tail.next = null
    } else {
      current = this.getNodeAt(index)
      const previous = current.previous
      previous.next = current.next
      current.next.previous = previous
    }

    this.count -= 1

    return current.element
  }

  public remove(element: T): T {
    if (!this.head) {
      throw new Error('Can not remove element from an empty list.')
    }

    const index = this.indexOf(element)
    if (index === -1) {
      throw new Error('Can not remove a non-existing element.')
    }

    return this.removeAt(index)
  }

  public getHead(): T {
    if (this.isEmpty()) {
      throw new Error('Can not get head of an empty list.')
    }

    return this.head.element
  }

  public getTail(): T {
    if (this.isEmpty()) {
      throw new Error('Can not get tail of an empty list.')
    }

    return this.tail.element
  }

  public clear(): void {
    this.head = null
    this.tail = null
    this.count = 0
  }

  public size(): number {
    return this.count
  }

  public isEmpty(): boolean {
    return this.count === 0
  }

  public toString(): string {
    if (this.isEmpty()) {
      return ''
    }

    let node = this.head
    let string = `${node.element}`
    while (node.next) {
      node = node.next
      string += `, ${node.element}`
    }

    return string
  }
}
