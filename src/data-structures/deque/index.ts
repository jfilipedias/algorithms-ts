export class Deque<T> {
  constructor(
    private items: { [key: number]: T } = {},
    private count = 0,
    private lowestCount = 0,
  ) {}

  public addFront(element: T): void {
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

  public addBack(element: T): void {
    this.items[this.count] = element
    this.count += 1
  }

  public removeFront(): T {
    if (this.isEmpty()) {
      throw new Error('Can not remove element from an empty deque.')
    }

    const element = this.items[this.lowestCount]
    delete this.items[this.lowestCount]
    this.lowestCount += 1

    return element
  }

  public removeBack(): T {
    if (this.isEmpty()) {
      throw new Error('Can not remove element from an empty deque.')
    }

    this.count -= 1
    const element = this.items[this.count]
    delete this.items[this.count]

    return element
  }

  public peekFront(): T {
    if (this.isEmpty()) {
      throw new Error('Can not get element from an empty deque.')
    }

    return this.items[this.lowestCount]
  }

  public peekBack(): T {
    if (this.isEmpty()) {
      throw new Error('Can not get element from an empty deque.')
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
