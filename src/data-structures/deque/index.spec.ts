import { describe, it, expect, beforeEach } from 'vitest'
import { Deque } from '.'

describe('Test deque data structure', () => {
  let deque: Deque<number>

  beforeEach(() => {
    deque = new Deque<number>()
  })

  it('Should be able to create an empty deque', () => {
    expect(deque.isEmpty()).toBeTruthy()
    expect(deque.size()).toEqual(0)
    expect(deque.toString()).toEqual('')
  })

  it('Should be able to add data to deque front', () => {
    deque.addFront(1)
    deque.addFront(2)

    expect(deque.size()).toEqual(2)
    expect(deque.toString()).toEqual('2, 1')
  })

  it('Should be able to add data to deque back', () => {
    deque.addBack(1)
    deque.addBack(2)

    expect(deque.size()).toBe(2)
    expect(deque.toString()).toBe('1, 2')
  })

  it('Should be able to remove data to deque front', () => {
    deque.addBack(1)
    deque.addBack(2)
    deque.addBack(3)
    deque.removeFront()

    expect(deque.size()).toBe(2)
    expect(deque.toString()).toBe('2, 3')
  })

  it('Should be able to remove data to deque back', () => {
    deque.addBack(1)
    deque.addBack(2)
    deque.addBack(3)
    deque.removeBack()

    expect(deque.size()).toBe(2)
    expect(deque.toString()).toBe('1, 2')
  })

  it('Should not be able to remove data from empty deque', () => {
    expect(() => deque.removeFront()).toThrow(
      'Can not remove element from an empty deque.',
    )

    expect(() => deque.removeBack()).toThrow(
      'Can not remove element from an empty deque.',
    )
  })

  it('Should be able to peek front data', () => {
    deque.addBack(3)
    deque.addBack(2)

    expect(deque.peekFront()).toEqual(3)
  })

  it('Should be able to peek back data', () => {
    deque.addBack(3)
    deque.addBack(2)

    expect(deque.peekBack()).toEqual(2)
  })

  it('Should not be able to peek an empty deque', () => {
    expect(() => deque.peekFront()).toThrow(
      'Can not get element from an empty deque.',
    )

    expect(() => deque.peekBack()).toThrow(
      'Can not get element from an empty deque.',
    )
  })

  it('Should be able to clear the deque', () => {
    deque.addBack(10)
    deque.addBack(-3)
    deque.clear()

    expect(deque.isEmpty()).toBeTruthy()
  })
})
