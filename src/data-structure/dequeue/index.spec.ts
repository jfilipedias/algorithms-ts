import { describe, it, expect } from 'vitest'
import { Dequeue } from '.'

describe('Test deque data structure', () => {
  it('Should be able to create an empty deque', () => {
    const dequeue = new Dequeue<number>()

    expect(dequeue.isEmpty()).toBe(true)
    expect(dequeue.size()).toBe(0)
    expect(dequeue.toString()).toBe('')
  })

  it('Should be able to add data to deque front', () => {
    const dequeue = new Dequeue<number>()
    dequeue.addFront(1)
    expect(dequeue.size()).toBe(1)
    expect(dequeue.isEmpty()).toBe(false)

    dequeue.addFront(2)
    expect(dequeue.size()).toBe(2)
    expect(dequeue.toString()).toBe('2, 1')

    dequeue.removeFront()
    dequeue.addFront(3)
    expect(dequeue.size()).toBe(2)
    expect(dequeue.toString()).toBe('3, 1')
  })

  it('Should be able to add data to deque back', () => {
    const dequeue = new Dequeue<number>()
    dequeue.addBack(1)
    expect(dequeue.size()).toBe(1)
    expect(dequeue.isEmpty()).toBe(false)

    dequeue.addBack(2)
    expect(dequeue.size()).toBe(2)
    expect(dequeue.toString()).toBe('1, 2')
  })

  it('Should be able to remove data to deque front', () => {
    const deque = new Dequeue<number>()
    deque.addBack(1)
    deque.addBack(2)
    deque.addBack(3)
    expect(deque.size()).toBe(3)
    expect(deque.toString()).toBe('1, 2, 3')
    expect(deque.isEmpty()).toBe(false)

    deque.removeFront()
    expect(deque.size()).toBe(2)
    expect(deque.toString()).toBe('2, 3')
  })

  it('Should be able to remove data to deque back', () => {
    const deque = new Dequeue<number>()
    deque.addBack(1)
    deque.addBack(2)
    deque.addBack(3)
    expect(deque.size()).toBe(3)
    expect(deque.toString()).toBe('1, 2, 3')
    expect(deque.isEmpty()).toBe(false)

    deque.removeBack()
    expect(deque.size()).toBe(2)
    expect(deque.toString()).toBe('1, 2')
  })

  it('Should not be able to remove data from empty dequeue', () => {
    const deque = new Dequeue<number>()

    expect(() => deque.removeFront()).toThrow(
      'Can not remove element from an empty dequeue.',
    )
    expect(() => deque.removeBack()).toThrow(
      'Can not remove element from an empty dequeue.',
    )
  })

  it('Should be able to peek front data', () => {
    const deque = new Dequeue<number>()
    deque.addBack(3)
    deque.addBack(2)

    expect(deque.peekFront()).toEqual(3)
  })

  it('Should be able to peek back data', () => {
    const deque = new Dequeue<number>()
    deque.addBack(3)
    deque.addBack(2)

    expect(deque.peekBack()).toEqual(2)
  })

  it('Should not be able to peek an empty dequeue', () => {
    const deque = new Dequeue<number>()

    expect(() => deque.peekFront()).toThrow(
      'Can not get element from an empty dequeue.',
    )
    expect(() => deque.peekBack()).toThrow(
      'Can not get element from an empty dequeue.',
    )
  })

  it('Should be able to clear the queue', () => {
    const deque = new Dequeue<number>()
    deque.addBack(10)
    deque.addBack(-3)

    expect(deque.size()).toBe(2)
    expect(deque.toString()).toBe('10, -3')

    deque.clear()
    expect(deque.size()).toBe(0)
    expect(deque.isEmpty()).toBe(true)
    expect(deque.toString()).toBe('')
  })
})
