import { describe, it, expect } from 'vitest'
import { Set } from '.'

describe('Test set data structure', () => {
  it('Should be able to create a empty set', () => {
    const set = new Set()

    expect(set.size()).toEqual(0)
    expect(set.isEmpty()).toBeTruthy()
    expect(set.values()).toEqual([])
  })

  it('Should be able to add an element', () => {
    const set = new Set()

    expect(set.add(1)).toBeTruthy()
    expect(set.isEmpty()).toBeFalsy()
    expect(set.size()).toEqual(1)
    expect(set.values()).toEqual([1])
    expect(set.add(2)).toBeTruthy()
    expect(set.size()).toEqual(2)
    expect(set.values()).toEqual([1, 2])
  })

  it('Should not be able to add the same element', () => {
    const set = new Set()

    expect(set.add(1)).toBeTruthy()
    expect(set.add(1)).toBeFalsy()
    expect(set.size()).toEqual(1)
  })

  it('Should be able to remove an element', () => {
    const set = new Set()

    set.add(1)
    set.add(2)

    expect(set.size()).toEqual(2)
    expect(set.remove(1)).toBeTruthy()
    expect(set.size()).toEqual(1)
  })

  it('Should not be able to remove a non-existing element', () => {
    const set = new Set()

    expect(set.remove(1)).toBeFalsy()

    set.add(1)

    expect(set.remove(2)).toBeFalsy()
  })

  it('Should be able to join two sets', () => {
    const setA = new Set()
    setA.add(1)
    setA.add(2)
    setA.add(3)

    const setB = new Set()
    setB.add(2)
    setB.add(3)
    setB.add(4)
    setB.add(5)

    const unionSet = setA.union(setB)

    expect(unionSet.values()).toEqual([1, 2, 3, 4, 5])
  })

  it('Should not be able to clear a set', () => {
    const set = new Set()

    set.add(1)
    set.add(2)

    expect(set.size()).toEqual(2)

    set.clear()

    expect(set.isEmpty()).toBeTruthy()
  })
})
