import { describe, it, expect } from 'vitest'
import { Set } from '.'

describe('Test set data structure', () => {
  it('Should be able to create a empty set', () => {
    const set = new Set()

    expect(set.size()).toEqual(0)
    expect(set.isEmpty()).toBeTruthy()
  })

  it('Should be able to add an element', () => {
    const set = new Set()

    expect(set.add(1)).toBeTruthy()
    expect(set.isEmpty()).toBeFalsy()
    expect(set.size()).toEqual(1)
    expect(set.add(2)).toBeTruthy()
    expect(set.size()).toEqual(2)
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

  it('Should not be able to clear a set', () => {
    const set = new Set()

    set.add(1)
    set.add(2)

    expect(set.size()).toEqual(2)

    set.clear()

    expect(set.isEmpty()).toBeTruthy()
  })
})
