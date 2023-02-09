export class Set {
  constructor(private items: { [key: PropertyKey]: PropertyKey } = {}) {}

  public has(element: PropertyKey) {
    return Object.prototype.hasOwnProperty.call(this.items, element)
  }

  public add(element: PropertyKey) {
    if (this.has(element)) {
      return false
    }

    this.items[element] = element
    return true
  }

  public remove(element: PropertyKey) {
    if (this.isEmpty() || !this.has(element)) {
      return false
    }

    delete this.items[element]
    return true
  }

  public size() {
    return Object.keys(this.items).length
  }

  public isEmpty() {
    return this.size() === 0
  }

  public clear() {
    this.items = {}
  }
}
