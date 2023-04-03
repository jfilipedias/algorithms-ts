import { describe, it, expect, beforeEach } from 'vitest'
import { LinkedList } from '.'

describe('Test linked list data structure', () => {
  let list: LinkedList<number>

  beforeEach(() => {
    list = new LinkedList<number>()
  })

  it('Should be able to create an empty linked list', () => {
    expect(list.isEmpty()).toBeTruthy()
    expect(list.size()).toEqual(0)
    expect(list.toString()).toEqual('')
    expect(() => list.getAt(0)).toThrow('Index out of range.')
    expect(() => list.getHead()).toThrow('Can not get head of an empty list.')
  })

  it('Should be able to add multiple elements to the list', () => {
    list.push(9)
    list.push(13)
    list.push(0)

    expect(list.size()).toEqual(3)
    expect(list.toString()).toEqual('9, 13, 0')
  })

  it('Should be able to insert element to the list', () => {
    list.push(37)
    list.push(0)
    list.insert(-12, 0)
    list.insert(69, 2)

    expect(list.size()).toEqual(4)
    expect(list.toString()).toEqual('-12, 37, 69, 0')
  })

  it('Should not be able to insert an element to a no-existing index', () => {
    list.push(9)

    expect(() => list.insert(13, 2)).toThrow('Index out of range.')
  })

  it('Should be able to remove an existing element', () => {
    list.push(-2)
    list.push(13)
    list.push(0)

    expect(list.size()).toEqual(3)
    expect(list.toString()).toEqual('-2, 13, 0')

    const removed = list.remove(13)

    expect(removed).toEqual(13)
    expect(list.size()).toEqual(2)
    expect(list.toString()).toEqual('-2, 0')
  })

  it('Should not be able to remove a non-existing element', () => {
    list.push(9)
    list.push(13)
    list.push(0)

    expect(() => list.remove(15)).toThrow(
      'Can not remove a non-existing element.',
    )
  })

  it('Should not be able to remove element from an empty list', () => {
    expect(() => list.remove(15)).toThrow(
      'Can not remove element from an empty list.',
    )
  })

  it('Should be able to remove element at a specific index', () => {
    list.push(9)
    list.push(7)
    list.push(13)
    list.push(0)
    list.push(1)

    let removed = list.removeAt(0)

    expect(removed).toEqual(9)
    expect(list.size()).toEqual(4)
    expect(list.toString()).toEqual('7, 13, 0, 1')

    removed = list.removeAt(3)

    expect(removed).toEqual(1)
    expect(list.size()).toEqual(3)
    expect(list.toString()).toEqual('7, 13, 0')
  })

  it('Should not be able to remove element at a non-existing index', () => {
    list.push(9)

    expect(() => list.removeAt(3)).toThrow('Index out of range.')
  })

  it('Should be able to get element at a specific index', () => {
    list.push(9)
    list.push(13)
    list.push(0)

    expect(list.getHead()).toEqual(9)
    expect(list.getAt(0)).toEqual(9)
    expect(list.getAt(1)).toEqual(13)
    expect(list.getAt(2)).toEqual(0)
  })

  it('Should not be able to get element from an empty list', () => {
    expect(() => list.getAt(1)).toThrow('Index out of range.')
  })

  it('Should be able to get the index of an element', () => {
    list.push(9)
    list.push(13)
    list.push(0)

    expect(list.indexOf(9)).toEqual(0)
    expect(list.indexOf(13)).toEqual(1)
    expect(list.indexOf(0)).toEqual(2)
    expect(list.indexOf(15)).toEqual(-1)
  })

  it('Should be able to clear an existing list', () => {
    list.push(9)
    list.push(13)
    list.push(0)

    expect(list.size()).toEqual(3)
    expect(list.toString()).toEqual('9, 13, 0')

    list.clear()

    expect(list.isEmpty()).toBeTruthy()
    expect(() => list.getHead()).toThrow('Can not get head of an empty list.')
  })
})
