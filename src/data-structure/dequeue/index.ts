export class Dequeue<type> {
  private items: object
  private count: number
  private lowestCount: number

  constructor() {
    this.items = {}
    this.count = 0
    this.lowestCount = 0
  }

  public addFront(element: type): void {
    if (this.isEmpty()) {
      this.addBack(element)
    } else if (this.lowestCount > 0) {
      this.lowestCount -= 1
      this.items[this.lowestCount] = element
    } else {
      for (let i = this.count; i > 0; i -= 1) {
        this.items[i] = this.items[i - 1]
      }

      this.count += 1
      this.lowestCount = 0
      this.items[0] = element
    }
  }

  public addBack(element: type): void {
    this.items[this.count] = element
    this.count += 1
  }

  public removeFront(): type {
    if (this.isEmpty()) {
      throw new Error('Can not remove element from an empty dequeue.')
    }

    const element = this.items[this.lowestCount]
    delete this.items[this.lowestCount]
    this.lowestCount += 1

    return element
  }

  public removeBack(): type {
    if (this.isEmpty()) {
      throw new Error('Can not remove element from an empty dequeue.')
    }

    this.count -= 1
    const element = this.items[this.count]
    delete this.items[this.count]

    return element
  }

  public peekFront(): type {
    if (this.isEmpty()) {
      throw new Error('Can not get element from an empty dequeue.')
    }

    return this.items[this.lowestCount]
  }

  public peekBack(): type {
    if (this.isEmpty()) {
      throw new Error('Can not get element from an empty dequeue.')
    }

    return this.items[this.count - 1]
  }

  public clear(): void {
    this.items = {}
    this.count = 0
    this.lowestCount = 0
  }

  public size(): number {
    return this.count - this.lowestCount
  }

  public isEmpty(): boolean {
    return this.size() === 0
  }

  public toString(): string {
    if (this.isEmpty()) {
      return ''
    }

    let str = `${this.items[this.lowestCount]}`

    for (let i = this.lowestCount + 1; i < this.count; i += 1) {
      str = `${str}, ${this.items[i]}`
    }

    return str
  }
}
