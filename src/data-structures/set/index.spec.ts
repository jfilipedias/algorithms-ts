import { describe, it, expect, beforeEach } from 'vitest'
import { Set } from '.'

describe('Test set data structure', () => {
  let set: Set<number>

  beforeEach(() => {
    set = new Set<number>()
  })

  it('Should be able to create a empty set', () => {
    expect(set.size()).toEqual(0)
    expect(set.isEmpty()).toBeTruthy()
    expect(set.values()).toEqual([])
    expect(set.toString()).toEqual('')
  })

  it('Should be able to add an element', () => {
    expect(set.add(1)).toBeTruthy()
    expect(set.isEmpty()).toBeFalsy()
    expect(set.add(2)).toBeTruthy()
    expect(set.size()).toEqual(2)
    expect(set.values()).toEqual([1, 2])
    expect(set.toString()).toEqual('1, 2')
  })

  it('Should not be able to add the same element', () => {
    expect(set.add(1)).toBeTruthy()
    expect(set.add(1)).toBeFalsy()
    expect(set.size()).toEqual(1)
  })

  it('Should be able to delete an element', () => {
    set.add(1)
    set.add(2)

    expect(set.size()).toEqual(2)
    expect(set.delete(1)).toBeTruthy()
    expect(set.size()).toEqual(1)
  })

  it('Should not be able to remove a non-existing element', () => {
    expect(set.delete(1)).toBeFalsy()

    set.add(1)

    expect(set.delete(2)).toBeFalsy()
  })

  it('Should be able to join two sets', () => {
    const setA = new Set<number>()
    setA.add(1)
    setA.add(2)
    setA.add(3)

    const setB = new Set<number>()
    setB.add(2)
    setB.add(3)
    setB.add(4)
    setB.add(5)

    const unionSet = setA.union(setB)

    expect(unionSet.values()).toEqual([1, 2, 3, 4, 5])
    expect(unionSet.toString()).toEqual('1, 2, 3, 4, 5')
  })

  it('Should be able to take the intersection of two sets', () => {
    const setA = new Set<number>()
    setA.add(1)
    setA.add(2)
    setA.add(3)

    const setB = new Set<number>()
    setB.add(2)
    setB.add(3)
    setB.add(4)
    setB.add(5)

    const intersectionSet = setA.intersection(setB)

    expect(intersectionSet.values()).toEqual([2, 3])
    expect(intersectionSet.toString()).toEqual('2, 3')
  })

  it('Should be able to take the diference of two sets', () => {
    const setA = new Set<number>()
    setA.add(1)
    setA.add(2)
    setA.add(3)
    setA.add(4)

    const setB = new Set<number>()
    setB.add(3)
    setB.add(4)
    setB.add(5)

    const differenceSet = setA.difference(setB)

    expect(differenceSet.values()).toEqual([1, 2])
    expect(differenceSet.toString()).toEqual('1, 2')
  })

  it('Should be able check if is a subset', () => {
    const setA = new Set<number>()
    setA.add(2)
    setA.add(3)

    const setB = new Set<number>()
    setB.add(1)
    setB.add(2)
    setB.add(3)

    expect(setA.isSubsetOf(setB)).toBeTruthy()
    expect(setB.isSubsetOf(setA)).toBeFalsy()
  })

  it('Should be able to clear a set', () => {
    set.add(1)
    set.add(2)

    expect(set.size()).toEqual(2)

    set.clear()

    expect(set.isEmpty()).toBeTruthy()
  })
})
