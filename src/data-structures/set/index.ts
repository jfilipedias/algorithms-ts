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

  public union(otherSet: Set) {
    const unionSet = new Set()

    Object.values(this.values()).forEach((value) => unionSet.add(value))
    Object.values(otherSet.values()).forEach((value) => unionSet.add(value))

    return unionSet
  }

  public values() {
    return Object.values(this.items)
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
