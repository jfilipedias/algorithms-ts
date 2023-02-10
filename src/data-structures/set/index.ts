export class Set<T> {
  constructor(private items: { [key: PropertyKey]: T } = {}) {}

  public has(element: T) {
    return Object.prototype.hasOwnProperty.call(
      this.items,
      element as PropertyKey,
    )
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

  public values() {
    return Object.values(this.items)
  }

  public add(element: T) {
    if (this.has(element)) {
      return false
    }

    this.items[element as PropertyKey] = element
    return true
  }

  public remove(element: T) {
    if (this.isEmpty() || !this.has(element)) {
      return false
    }

    delete this.items[element as PropertyKey]
    return true
  }

  public union(otherSet: Set<T>) {
    const unionSet = new Set<T>()

    this.values().forEach((value) => unionSet.add(value))
    otherSet.values().forEach((value) => unionSet.add(value))

    return unionSet
  }

  public intersection(otherSet: Set<T>) {
    const intersectionSet = new Set<T>()

    this.values().forEach((value) => {
      if (otherSet.has(value)) {
        intersectionSet.add(value)
      }
    })

    return intersectionSet
  }

  public difference(otherSet: Set<T>) {
    const differenceSet = new Set<T>()

    this.values().forEach((value) => {
      if (!otherSet.has(value)) {
        differenceSet.add(value)
      }
    })

    return differenceSet
  }

  public isSubsetOf(otherSet: Set<T>) {
    const currentSetValues = this.values()
    const otherSetValue = otherSet.values()

    if (currentSetValues.length > otherSetValue.length) {
      return false
    }

    let isSubset = true

    currentSetValues.every((value) => {
      if (!otherSet.has(value)) {
        isSubset = false
        return false
      }

      return true
    })

    return isSubset
  }
}
